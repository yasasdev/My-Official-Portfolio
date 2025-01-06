// @copyright 2024 Yasas Lekamge
// @license Apache-2.0

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
            </main>
        </div>
    )
}

export default App;