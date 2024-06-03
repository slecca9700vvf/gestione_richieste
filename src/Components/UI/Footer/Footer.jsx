import React from 'react';
import labels from '../../../API-Labels/labels.json'

function Footer() {
    return (
        <footer className="footer">
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
