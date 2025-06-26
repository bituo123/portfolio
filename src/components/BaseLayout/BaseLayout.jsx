import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './BaseLayout.module.scss';
import Home from '../../pages/Home';
import Portfolio from '../../pages/Portfolio';
import About from '../../pages/About';
import Contact from '../../pages/Contact';

export default function BaseLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navContainer}>
            <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
               {t('nav.logo')}
             </Link>
            
            <div className={`${styles.navMenu} ${isMobileMenuOpen ? styles.navMenuOpen : ''}`}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${styles.navLink} ${location.pathname === item.path ? styles.navLinkActive : ''}`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className={styles.navActions}>
               <div className={styles.languageSelector}>
                 <button 
                   className={`${styles.langBtn} ${i18n.language === 'en' ? styles.langBtnActive : ''}`}
                   onClick={() => changeLanguage('en')}
                 >
                   EN
                 </button>
                 <button 
                   className={`${styles.langBtn} ${i18n.language === 'zh' ? styles.langBtnActive : ''}`}
                   onClick={() => changeLanguage('zh')}
                 >
                   中文
                 </button>
               </div>
               
               <button 
                 className={styles.themeToggle}
                 onClick={toggleTheme}
                 aria-label={t('theme.toggle')}
               >
                 {isDarkMode ? '☀️' : '🌙'}
               </button>
               
               <button 
                 className={styles.mobileMenuToggle}
                 onClick={toggleMobileMenu}
                 aria-label={t('theme.menu')}
               >
                 <span className={styles.hamburger}></span>
                 <span className={styles.hamburger}></span>
                 <span className={styles.hamburger}></span>
               </button>
             </div>
          </div>
        </nav>
      </header>
      
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <footer className={styles.footer}>
         <div className={styles.footerContainer}>
           <p>{t('footer.copyright')}</p>
         </div>
       </footer>
    </div>
  );
}