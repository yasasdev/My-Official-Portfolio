// @copyright 2024 Yasas Lekamge
// @license Apache-2.0

import React from 'react';
import Header from './components/Header';

const App = () => {
    return (
        <div>
            <header className="
            fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
                <div className="max-w-screen-2xl w-full mx-auto px-4">
                    <h1>
                        <a href="/" className="logo">
                            <img src="images/logo.svg" width={40} height={40} alt="Yasas Lekamge" />
                        </a>
                    </h1>
                </div>
            </header>
        </div>
    )
}

export default App;