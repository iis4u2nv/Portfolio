import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
function App() {
    const [activeSection, setActiveSection] = useState('about');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="App">
            <Header activeSection={activeSection} onSectionChange={handleSectionChange}/>
            <main>
              {/* Conditional rendering for different sections */}
              {activeSection === 'about' && <About />}
              {activeSection === 'projects' && <Projects />}
              {activeSection === 'contact' && <Contact />}
              {activeSection === 'resume' && <Resume />}
            </main>
            <Footer />
        </div>
    );
}

export default App;
