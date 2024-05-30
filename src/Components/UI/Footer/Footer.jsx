import React from 'react';
import './Footer.css';
import labels from '../../../Labels.json'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <span>{ labels.footer.title }</span>
                <br/>
                <br/>
                { labels.footer.description }
            </div>
        </footer>
    );
}

export default Footer;
