import React from 'react';
import { getLabelByName } from '../../Exports/Labels';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <span>{ getLabelByName("footer_title") }</span>
                <br/>
                <br/>
                { getLabelByName("footer_description") }
            </div>
        </footer>
    );
}

export default Footer;
