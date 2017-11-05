import React from 'react';
if (process.env.BROWSER) {
	require('./Logo.scss');
}

const Logo = () => <div className="logo">ex.netflixroulette</div>;

export default Logo;