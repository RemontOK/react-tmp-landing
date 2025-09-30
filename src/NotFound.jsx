import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Stern from './Stern';
import SEOHead from './components/SEOHead';
import './NotFound.css';

const NotFound = () => {
  return (
    <>
      <SEOHead
        title="Страница не найдена - 404 | ТЕХМЕТПРОМ"
        description="Запрашиваемая страница не найдена. Перейдите на главную страницу или воспользуйтесь навигацией сайта."
        keywords="404, страница не найдена, ТЕХМЕТПРОМ"
        type="website"
      />
      <Header showHeader={true} />
      
      <main className="not-found-section">
        <div className="not-found-container">
          <div className="not-found-content">
            <div className="not-found-number">404</div>
            <h1 className="not-found-title">Страница не найдена</h1>
            <p className="not-found-description">
              К сожалению, запрашиваемая страница не существует или была перемещена.
            </p>
            <p className="not-found-suggestion">
              Возможно, вы искали:
            </p>
            
            <div className="not-found-links">
              <Link to="/" className="not-found-link primary">
                Главная страница
              </Link>
              <Link to="/products" className="not-found-link">
                Наша продукция
              </Link>
              <Link to="/production" className="not-found-link">
                Производство
              </Link>
              <Link to="/team" className="not-found-link">
                Команда
              </Link>
            </div>
            
            <div className="not-found-search">
              <p>Или воспользуйтесь поиском по сайту:</p>
              <div className="not-found-search-box">
                <input 
                  type="text" 
                  placeholder="Поиск..." 
                  className="not-found-search-input"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const query = e.target.value.toLowerCase();
                      if (query.includes('гидрофон')) {
                        window.location.href = '/hydrophone';
                      } else if (query.includes('продукция') || query.includes('товар')) {
                        window.location.href = '/products';
                      } else if (query.includes('производство')) {
                        window.location.href = '/production';
                      } else if (query.includes('команда') || query.includes('сотрудник')) {
                        window.location.href = '/team';
                      } else {
                        window.location.href = '/';
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Stern />
    </>
  );
};

export default NotFound;
