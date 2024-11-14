'use client';

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { lusitana } from '@/app/ui/fonts'

type MainComponentProps = {
  scrollY: number
}

const MainComponent = forwardRef<HTMLElement, MainComponentProps>((props, ref) => {
  const mainRef = useRef<HTMLElement | null>(null);
  useImperativeHandle(ref, () => mainRef.current as HTMLElement);
  
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5)
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const createRandomLine = () => {
    const container = mainRef.current;
    const line = document.createElement('div');

    // Set base styles for the line
    line.style.position = 'absolute';
    line.style.backgroundColor = '#ffffff';
    line.style.opacity = '0.2';
    line.style.zIndex = '1';
    
    // Set orientation and animation
    const isHorizontal = Math.random() > 0.5;
    if (isHorizontal) {
      line.style.width = '60vw';
      line.style.height = '2px';
      line.style.top = `${Math.random() * 100}vh`;
      line.classList.add(`animate-move-horizontal`);
    } else {
      line.style.width = '2px';
      line.style.height = '60vh';
      line.style.left = `${Math.random() * 100}vw`;
      line.classList.add(`animate-move-vertical`);
    }

    // Append the line and remove it after 6 seconds
    if (container) {
      container.appendChild(line);
      setTimeout(() => container.removeChild(line), 6000);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(createRandomLine, 800);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      ref={mainRef}
      className='z-10 relative overflow-hidden h-[90vh] animate-fade-in'
    >
      <div
        className='absolute size-full bg-gradient-to-b from-slate-900 via-white to-slate-900'
        style={{ transform: `translateY(${offset}px)` }}
      />
      <div
        className='z-10 absolute inset-0 bg-cover bg-center transition-transform duration-200 ease-linear'
        style={{ transform: `translateY(${offset}px)` }}
      >
        <div className={`${lusitana.className} h-full flex flex-col justify-center text-center uppercase text-shadow`}>
          <h1 className='text-5xl lg:text-9xl font-extrabold tracking-widest'>
            Nahcoda
          </h1>
          <p className='tracking-small lg:text-2xl lg:tracking-letter18'>Digital Teknologi</p>
        </div>
      </div>
    </section>
  );
})


MainComponent.displayName = 'MainComponent';
export default MainComponent
