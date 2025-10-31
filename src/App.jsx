import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import VideoSection from './components/VideoSection';
import SocialMedia from './components/SocialMedia';
import ResourceGallery from './components/ResourceGallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <QuickLinks />
      <VideoSection />
      <SocialMedia />
      <ResourceGallery />
      <Footer />
    </div>
  );
}

export default App;
