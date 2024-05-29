import React from 'react';
import './Footer.css';
import labels from '../../../Labels.json'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                { labels.footer_description }
            </div>
        </footer>
    );
}

export default Footer;
