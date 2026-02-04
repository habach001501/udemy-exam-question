import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-bg-dark/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 px-8 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent cursor-pointer no-underline">
                <i className="fa-solid fa-cloud"></i> Chat GPT
            </Link>
            <nav>
                <Link to="/history">
                    <button className="bg-transparent border-none text-text-muted text-base ml-6 cursor-pointer transition-all duration-200 font-medium hover:text-text-main hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                        <i className="fa-solid fa-clock-rotate-left"></i> History
                    </button>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
