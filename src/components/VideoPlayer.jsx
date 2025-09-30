import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaExpand } from 'react-icons/fa';

const VideoPlayer = ({ 
  src, 
  poster, 
  alt, 
  className = '', 
  style = {},
  autoPlay = false,
  loop = false,
  muted = true,
  controls = true,
  onLoad = null,
  onEnded = null,
  onError = null,
  onLoadStart = null,
  onCanPlay = null,
  preload = 'metadata',
  initialSeekSeconds = 0.2,
  lazy = false,
  rootMargin = '200px',
  fadeIn = true
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);
  const observerRef = useRef(null);
  const [canAttachSrc, setCanAttachSrc] = useState(!lazy);

  useEffect(() => {
    if (!lazy) return;
    const node = videoRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start loading slightly before fully visible
            setCanAttachSrc(true);
            if (autoPlay) {
              // autoplay will be triggered after first frame paint
            }
          } else {
            // Do not pause when out of view; keep playing for seamless previews
          }
        });
      },
      { root: null, rootMargin, threshold: 0.1 }
    );
    io.observe(node);
    observerRef.current = io;
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [lazy, rootMargin, autoPlay]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const revealAfterFrame = () => {
      setIsLoaded(true);
      if (autoPlay) {
        const p = video.play();
        if (p && typeof p.then === 'function') {
          p.catch(() => {});
        }
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      // Seek a slightly larger offset to ensure a keyframe is decoded
      try {
        if (video.currentTime < initialSeekSeconds) {
          video.currentTime = initialSeekSeconds;
        }
      } catch {}
      if (onLoad) onLoad();
    };

    const handleSeeked = () => {
      // After seeking, ensure first painted frame before reveal
      if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
        try {
          // @ts-ignore
          video.requestVideoFrameCallback(() => {
            revealAfterFrame();
          });
        } catch {
          revealAfterFrame();
        }
      } else {
        // Fallback: small timeout to allow paint
        setTimeout(revealAfterFrame, 16);
      }
    };

    const handleLoadedData = () => {
      // Ensure a frame is decoded; do not reveal yet
      try {
        if (video.currentTime === 0) {
          video.currentTime = initialSeekSeconds;
        }
      } catch {}
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      console.log('Video ended event triggered');
      if (onEnded) onEnded();
    };
    const handleError = (e) => {
      if (onError) onError(e);
    };
    const handleLoadStart = () => {
      if (onLoadStart) onLoadStart();
    };
    const handleCanPlay = () => {
      if (onCanPlay) onCanPlay();
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('seeked', handleSeeked);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [onLoad, onEnded, onError, onLoadStart, onCanPlay, autoPlay, initialSeekSeconds]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const seekTime = (x / width) * duration;
      videoRef.current.currentTime = seekTime;
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className={`video-player ${className} ${isLoaded ? 'loaded' : ''}`}
      style={{ position: 'relative', ...style }}
      onMouseMove={showControlsTemporarily}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={canAttachSrc ? src : undefined}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        preload={canAttachSrc ? preload : 'none'}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: fadeIn ? (isLoaded ? 1 : 0) : 1,
          transition: fadeIn ? 'opacity 0.15s ease' : 'none'
        }}
      />
      
      {controls && (
        <div 
          className={`video-controls ${showControls ? 'show' : ''}`}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
            padding: '20px',
            opacity: showControls ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          {/* Progress bar */}
          <div 
            className="video-progress"
            style={{
              width: '100%',
              height: '4px',
              background: 'rgba(255,255,255,0.3)',
              borderRadius: '2px',
              marginBottom: '10px',
              cursor: 'pointer',
            }}
            onClick={handleSeek}
          >
            <div 
              className="video-progress-filled"
              style={{
                width: `${(currentTime / duration) * 100}%`,
                height: '100%',
                background: '#1565c0',
                borderRadius: '2px',
                transition: 'width 0.1s ease',
              }}
            />
          </div>
          
          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button
              onClick={togglePlay}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '18px',
              }}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            
            <span style={{ color: 'white', fontSize: '14px' }}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
            
            <button
              onClick={toggleMute}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            
            <button
              onClick={toggleFullscreen}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
                marginLeft: 'auto',
              }}
            >
              <FaExpand />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer; 