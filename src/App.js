import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">TVARI1</div>
        <nav className="nav">
          <a href="#about">О нас</a>
          <a href="#services">Услуги</a>
          <a href="#contact">Контакты</a>
        </nav>
      </header>
      
      <main>
        <section id="about" className="hero">
          <h1>Профессиональные визуальные решения</h1>
          <p>Создаем впечатляющий визуальный контент для вашего бизнеса</p>
        </section>
        
        <section id="services" className="services">
          <h2>Наши услуги</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>3D Визуализация</h3>
              <p>Создание фотореалистичных 3D изображений</p>
            </div>
            <div className="service-card">
              <h3>Анимация</h3>
              <p>Производство рекламных и презентационных роликов</p>
            </div>
            <div className="service-card">
              <h3>VR/AR</h3>
              <p>Разработка интерактивных виртуальных решений</p>
            </div>
          </div>
        </section>
        
        <section id="contact" className="contact">
          <h2>Свяжитесь с нами</h2>
          <form className="contact-form">
            <input type="text" placeholder="Ваше имя" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Ваше сообщение"></textarea>
            <button type="submit">Отправить</button>
          </form>
          <div className="contact-info">
            <p>Email: info@hxvisual.ru</p>
            <p>Телефон: +7 (XXX) XXX-XX-XX</p>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} HXVisual. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;