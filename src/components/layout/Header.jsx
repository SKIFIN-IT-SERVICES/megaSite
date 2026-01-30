import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mega Menu Data
  const menuItems = [
    {
      id: 'capabilities',
      label: 'Capabilities',
      hasMega: true,
      columns: [
        {
          title: "Core Services",
          links: ["Cloud Infrastructure", "Data Analytics", "AI & Automation", "Cybersecurity"]
        },
        {
          title: "Consulting",
          links: ["Digital Strategy", "IT Modernization", "Compliance Audits", "Staff Augmentation"]
        },
        {
          title: "Featured Insight",
          type: "featured",
          content: "State of AI 2026: How Enterprises are adapting."
        }
      ]
    },
    { id: 'industries', label: 'Industries', hasMega: false }, // Simplified for demo
    { id: 'insights', label: 'Insights', hasMega: false },
    { id: 'company', label: 'Company', hasMega: false },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <a href="/">Mega<span className={styles.logoAccent}>Site</span></a>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {menuItems.map((item) => (
              <li 
                key={item.id} 
                className={styles.navItem}
                onMouseEnter={() => item.hasMega && setActiveMenu(item.id)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a href={`#${item.id}`} className={styles.navLink}>
                  {item.label}
                  {item.hasMega && <span className={styles.arrow}>▼</span>}
                </a>

                {/* Mega Menu Dropdown */}
                {item.hasMega && activeMenu === item.id && (
                  <div className={styles.megaMenu}>
                    <div className={styles.megaGrid}>
                      {item.columns.map((col, idx) => (
                        <div key={idx} className={styles.megaColumn}>
                          <h4 className={styles.columnTitle}>{col.title}</h4>
                          {col.links ? (
                            <ul className={styles.megaList}>
                              {col.links.map((link, lIdx) => (
                                <li key={lIdx}><a href="#">{link}</a></li>
                              ))}
                            </ul>
                          ) : (
                            <div className={styles.featuredCard}>
                              <p>{col.content}</p>
                              <a href="#" className={styles.readMore}>Read Report →</a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href="#contact" className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
