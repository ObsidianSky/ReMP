import React from 'react';
if (process.env.BROWSER) {
	require('./Footer.scss');
}
import Logo from '../common/Logo/Logo';

const Footer = () => (
    <div className="footer">
        <Logo/>
    </div>
);

export default Footer;