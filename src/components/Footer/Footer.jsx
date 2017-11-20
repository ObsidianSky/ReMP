import React from 'react';
if (process.env.BROWSER) {
	require('./Footer.scss');
}
import Logo from '../common/Logo/Logo';

const Footer = () => (
    <div className="footer">
        <div className="footer__inner">
            <Logo/>
        </div>
    </div>
);

export default Footer;