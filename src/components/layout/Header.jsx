import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      id: 'services',
      label: 'Services',
      hasMega: true,
      columns: [
        {
          title: "AI & Data",
          links: [
            { name: "Generative AI", path: "/services/generative-ai" },
            { name: "Agentic AI", path: "/services/agentic-ai" },
            { name: "RPA & Automation", path: "/services/rpa-automation" },
            { name: "Vibe Coding", path: "/services/vibe-coding" },
            { name: "Data Analytics & BI", path: "/services/data-analytics" }
          ]
        },
        {
          title: "Infrastructure",
          links: [
            { name: "Cloud Migration", path: "/services/cloud-migration" },
            { name: "Multi-Cloud", path: "/services/multi-cloud" },
            { name: "Serverless", path: "/services/serverless" },
            { name: "Network Operations", path: "/services/network-services" },
            { name: "Web Hosting", path: "/services/web-hosting" }
          ]
        },
        {
          title: "Security & GRC",
          links: [
            { name: "Zero Trust Architecture", path: "/services/zero-trust" },
            { name: "24/7 SOC Operations", path: "/services/soc-siem" },
            { name: "Endpoint Security", path: "/services/endpoint-security" },
            { name: "Cloud Security (CSPM)", path: "/services/cloud-security" },
            { name: "Compliance", path: "/services/compliance" }
          ]
        },
        {
          title: "Engineering",
          links: [
            { name: "App Modernization", path: "/services/app-modernization" },
            { name: "Web & Mobile Dev", path: "/services/web-app-dev" },
            { name: "DevSecOps", path: "/services/devsecops" },
            { name: "Managed IT Support", path: "/services/managed-it" },
            { name: "Digital Workplace", path: "/services/digital-workplace" }
          ]
        },
        {
          title: "Platforms",
          links: [
            { name: "Subsman Platform", path: "/solutions/subsman" },
            { name: "Custom CRM System", path: "/solutions/crm" }
          ]
        }
      ]
    },
    {
      id: 'capabilities',
      label: 'Capabilities',
      hasMega: true,
      columns: [
        {
          title: "Core Services",
          links: [
            { name: "Cloud Infrastructure", path: "/services/cloud-migration" },
            { name: "Data Analytics", path: "/services/data-analytics" },
            { name: "AI & Automation", path: "/services/generative-ai" },
            { name: "Cybersecurity", path: "/services/zero-trust" }
          ]
        },
        {
          title: "Consulting",
          links: [
            { name: "Digital Strategy", path: "/services/digital-strategy" },
            { name: "IT Modernization", path: "/services/app-modernization" },
            { name: "Compliance Audits", path: "/services/compliance" },
            { name: "Staff Augmentation", path: "/services/staff-augmentation" }
          ]
        },
        {
          title: "Featured Insight",
          type: "featured",
          content: "State of AI 2026: How Enterprises are adapting."
        }
      ]
    },
    { id: 'company', label: 'Company', hasMega: false, path: "/company" },
    { id: 'contact', label: 'Contact', hasMega: false, path: "/contact" },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <Link to="/">Mega<span className={styles.logoAccent}>Site</span></Link>
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
                <Link to={item.path || '#'} className={styles.navLink}>
                  {item.label}
                  {item.hasMega && <span className={styles.arrow}>▼</span>}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.hasMega && activeMenu === item.id && (
                  <div className={`${styles.megaMenu} ${styles[item.id + 'Menu']}`}>
                    <div className={`${styles.megaGrid} ${styles[item.id + 'Grid']}`}>
                      {item.columns.map((col, idx) => (
                        <div key={idx} className={`${styles.megaColumn} ${col.type === 'featured' ? styles.featuredCol : ''}`}>
                          <h4 className={styles.columnTitle}>{col.title}</h4>
                          {col.type === 'featured' ? (
                            <div className={styles.featuredCard}>
                              <p>{col.content}</p>
                              <Link to="#" className={styles.readMore}>Read Report →</Link>
                            </div>
                          ) : col.links && (
                            <ul className={styles.megaList}>
                              {col.links.map((link, lIdx) => (
                                <li key={lIdx}><Link to={link.path}>{link.name}</Link></li>
                              ))}
                            </ul>
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
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
