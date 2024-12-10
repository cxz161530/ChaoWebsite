
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Education/Education";
import Hobby from "./Pages/Hobby/Hobby"
import Blog from "./Pages/Blog/Blog"
import MovieGame from "./Pages/MovieGame/MovieGame"
import Resume from "./Pages/Resume/Resume";


function App() {
    return (
      <>
      <header>
       <nav>
       <ul class="nav-list">  
                <li className="nav-item" >
                <a href="/">Home</a>
      
                </li>                
                <li className="nav-item" >
                    <a href="Projects">Projects</a>
                </li>
                <li className="nav-item" >
                    <a href="Resume">Resume</a>
                </li>
                <li className="nav-item" >
                    <a href="Education">Education</a>
                </li>
                <li className="nav-item" >
                    <a href="Hobby">Hobby</a>
                </li>
                <li className="nav-item" >
                    <a href="Blog">Blog</a> 
                </li>
                <li className="nav-item" >
                    <a href="Contact">Contact</a> 
                </li>
                <li className="nav-item" >
                    <a href="MovieGame">MovieGame</a> 
                </li>
            </ul>
        </nav>
        </header>

        <main>

        <Router>
                
       
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/hobby" element={<Hobby />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/movieGame" element={<MovieGame />} />
                
                    <Route path="/resume" element={<Resume />} />
              
                </Routes>
            
        </Router>
        </main>
        </>
    );
}

export default App
