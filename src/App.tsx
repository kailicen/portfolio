import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Posts from './components/Posts';
import Projects from './components/Projects';
import About from './components/About';
import ProjectPage from './components/ProjectPage';
import BookNotes from './components/BookNotes';
import BookNotePage from './components/BookNotePage';

const App:React.FC = () => {
  return (
    <div className='App'>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectPage />} />
        <Route path="booknotes" element={<BookNotes />} />
        <Route path="booknotes/:id" element={<BookNotePage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
