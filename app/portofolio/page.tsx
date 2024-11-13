/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect, useRef } from 'react';
import MainComponent from './components/main'
import AboutComponent from './components/about'
import ServicesComponent from './components/services'
import ProductsComponent from './components/products'
import ContactComponent from './components/contact'

export default function PortofolioPage() {
  const [, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const mainRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const productRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className='relative'>
      {/* Navbar section */}
      <div className={`fixed w-full opacity-80 top-0 z-50 py-2 px-4 text-white ${
        isScrolled ? 'bg-slate-950' : 'bg-transparent'
      }`}>
        <div className='flex justify-between'>
          <div>
            <button
              className='hover:underline'
              onClick={() => scrollToSection(mainRef)}
              >Home</button
            >
          </div>
          <div className='flex gap-4'>
            <button
              className='hover:underline'
              onClick={() => scrollToSection(aboutRef)}
              >About</button
            >
            <button
              className='hover:underline'
              onClick={() => scrollToSection(servicesRef)}
              >Services</button
            >
            <button
              className='hover:underline'
              onClick={() => scrollToSection(productRef)}
              >Products</button
            >
            <button
              className='hover:underline'
              onClick={() => scrollToSection(contactRef)}
              >Contact</button
            >
          </div>
        </div>
      </div>

      {/* Main section */}
      <MainComponent ref={mainRef} />

      {/* About section */}
      <AboutComponent ref={aboutRef} />

      {/* Services section */}
      <ServicesComponent ref={servicesRef} />

      {/* Product section */}
      <ProductsComponent ref={productRef} />

      {/* Contact section */}
      <ContactComponent ref={contactRef} />

      {/* CSS section */}
      <style jsx>{`
          .shine-text {
            position: relative;
            color: white;
            background: linear-gradient(to left, rgba(250, 250, 250), rgba(230, 230, 230));
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            background-size: 150%;
          }
        `}</style>
    </main>
  );
}
