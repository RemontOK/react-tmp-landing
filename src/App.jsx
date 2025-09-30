import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Partners from './Partners';
import Stern from './Stern';
import Project1str from './Project_1str';
import Production from './Production';
import PCBService from './PCBService';
import Team from './Team';
import Products from './Products';
import Hydrophone from './Hydrophone';
import NotFound from './NotFound';
import ScrollToTop from './components/ScrollToTop';
import SEOHead from './components/SEOHead';
import SkipLink from './components/SkipLink';
import StructuredData from './components/StructuredData';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isMainPage = location.pathname === '/' || location.pathname === '';
  
  // Список валидных маршрутов
  const validRoutes = ['/', '/products', '/production', '/team', '/hydrophone', '/pcb-service', '/project', '/projects'];
  const isValidRoute = validRoutes.includes(location.pathname);

  // Если это невалидный маршрут, показываем 404
  if (!isValidRoute && !isMainPage) {
    return <NotFound />;
  }

  // Если это главная страница, показываем Hero с интро
  if (isMainPage) {
    return (
      <>
        <SEOHead />
        <SkipLink />
        <ScrollToTop />
        <StructuredData />
        <Header showHeader={true} />
        <Hero />
        <main>
          <About />
          <Services />
          <Partners />
        </main>
        <Stern />
      </>
    );
  }

  // Для других страниц показываем только роутер (без Header)
  return (
    <>
      <SEOHead />
      <SkipLink />
      <ScrollToTop />
      <StructuredData />
      <Routes>
        <Route path="/project" element={<Project1str />} />
        <Route path="/projects" element={<Project1str />} />
        <Route path="/production" element={<Production />} />
        <Route path="/pcb-service" element={<PCBService />} />
        <Route path="/team" element={<Team />} />
        <Route path="/products" element={<Products />} />
        <Route path="/hydrophone" element={<Hydrophone />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
