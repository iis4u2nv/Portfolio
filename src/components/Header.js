import React from 'react';
import styles from './Header.module.css';

function Header ({ activeSection, onSectionChange}) {
    // ...header content and navigation logic...
    return (
        <header className={styles.header}>
            <h1>Amazing Grace</h1>
            <nav className={styles.nav}>
                <ul>
                    <li className={activeSection === 'about' ? 'styles.active' : ''}>
                        <a href='#' onClick={() => onSectionChange('about')}>About</a>
                    </li>
                    <li className={activeSection === 'projects' ? 'active' : ''}>
                        <a href='#' onClick={() => onSectionChange('about')}>Projects</a>
                    </li>
                    <li className={activeSection === 'contact' ? 'active' : ''}>
                        <a href='#' onClick={() => onSectionChange('about')}>Contact</a>
                    </li>                    
                    <li className={activeSection === 'resume' ? 'active' : ''}>
                        <a href='#' onClick={() => onSectionChange('about')}>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;