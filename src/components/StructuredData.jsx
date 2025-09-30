import { useEffect } from 'react';

const StructuredData = ({ type = 'organization' }) => {
  useEffect(() => {
    // Создаем структурированные данные для организации
    if (type === 'organization') {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ТЕХМЕТПРОМ",
        "alternateName": "Техметпром",
        "url": "https://техметпром.рф",
        "logo": "https://техметпром.рф/logo2.svg",
        "description": "Ведущий российский интегратор и производитель решений для морской и промышленной отрасли",
        "foundingDate": "2004",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "RU",
          "addressLocality": "Россия"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+7-XXX-XXX-XXXX",
          "contactType": "customer service",
          "email": "info@tehmetprom.ru"
        },
        "sameAs": [
          "https://техметпром.рф"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Услуги ТЕХМЕТПРОМ",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Производство электроники",
                "description": "Производство и монтаж электронных компонентов"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "PCB проектирование",
                "description": "Проектирование печатных плат"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Инжиниринг",
                "description": "Инжиниринговые услуги для промышленности"
              }
            }
          ]
        }
      };

      // Добавляем скрипт в head
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        // Удаляем скрипт при размонтировании
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, [type]);

  return null; // Компонент не рендерит ничего
};

export default StructuredData; 