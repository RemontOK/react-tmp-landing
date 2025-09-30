import React from 'react';
import './Partners.css';
import './Partners.mobile.css';

const partners = [
  { 
    name: 'Газпром', 
    logo: 'https://елово-округ.рф/upload/iblock/85f/10813r7lkz1bl2puy1k6ajhax9n06nhw.png',
    category: 'Энергетика' 
  },
  { 
    name: 'ХИММАШ', 
    logo: 'https://avatars.mds.yandex.net/i?id=cf60198b2318fefb9acd47c791942d6a_l-5042534-images-thumbs&n=13',
    category: 'Финансы' 
  },
  { 
    name: 'Яндекс', 
    logo: 'https://avatars.mds.yandex.net/i?id=31786b9c8713259465949f84d3d79210e9d37262-16116239-images-thumbs&n=13',
    category: 'IT' 
  },
  { 
    name: 'Роснефть', 
    logo: 'https://avatars.mds.yandex.net/i?id=ee1bdeeb65c47f430db9cd80bda063586af85fa1-5221954-images-thumbs&n=13',
    category: 'Роснефть' 
  },
  { 
    name: 'Лукойл', 
    logo: 'https://avatars.mds.yandex.net/i?id=54222b2adbdfe61d4a448f1d045edc6c896d859d-4773559-images-thumbs&n=13',
    category: 'Нефтегаз' 
  },
  { 
    name: 'Сибирский регион', 
    logo: 'https://sun9-28.userapi.com/s/v1/if2/ISOA6W8HhcC0Be7a8OLMSmX74mBBahe5oWa_Fm--YEq9EPvVsCHTVKKXefgWWT6-pxWFOHv0pqqASZGaZTcohcy8.jpg?quality=95&as=32x21,48x31,72x46,108x69,160x103,240x154,360x232,480x309,540x347,622x400&from=bu&cs=622x0',
    category: 'Финансы' 
  },
  { 
    name: 'МАГЭ', 
    logo: 'https://static.tildacdn.com/tild3838-6331-4831-b430-636463393436/mage_1.jpg',
    category: 'Энергетика' 
  },
  { 
    name: 'Уралмашзавод', 
    logo: 'https://upload.wikimedia.org/wikipedia/ru/1/1d/UZTM_logo.png?20151117105200',
    category: 'Машиностроение' 
  }
];

const Partners = () => {
  return (
    <section className="partners-section" id="partners">
      {/* Темная секция с логотипами на всю ширину */}
      <div className="partners-logos-section">
        <div className="partners-logos-marquee">
          <div className="logos-track">
            {/* Дублируем элементы для бесконечной анимации */}
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
              <div 
                className="partner-logo" 
                key={index}
                style={partner.logo ? {
                  backgroundImage: `url(${partner.logo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  padding: '10px'
                } : {}}
              >
                {!partner.logo && (
                  <div 
                    className="logo-block"
                    style={{ backgroundColor: partner.color }}
                  >
                    {partner.name}
                  </div>
                )}
                {!partner.logo && (
                  <div className="logo-name">{partner.name}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 