'use client';

import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

type MainComponentProps = {
  scrollY: number;
};

const MainComponent = forwardRef<HTMLElement, MainComponentProps>((props, ref) => {
  const mainRef = useRef<HTMLElement | null>(null);
  useImperativeHandle(ref, () => mainRef.current as HTMLElement);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5); // Adjust parallax effect strength
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const generateRandomDots = (count: number, delay: string = '0s') => {
    return Array.from({ length: count }).map((_, index) => {
      const top = Math.random() * 100; // Position top in %
      const left = Math.random() * 100; // Position left in %

      return (
        <div
          key={index}
          className="bg-white h-px w-px rounded-full absolute animate-move-up"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: delay,
          }}
        ></div>
      );
    });
  };

  return (
    <section
      ref={mainRef}
      className="bg-slate-900 relative overflow-hidden h-[90vh] animate-fade-in"
    >
      {/* Random Dots */}
      <div className="absolute inset-0 h-full">
        <div>{generateRandomDots(100)}</div>
        <div>{generateRandomDots(100, '3s')}</div>
        <div>{generateRandomDots(100, '6s')}</div>
      </div>

      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-200 ease-linear"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <div
          className={`max-w-6xl mx-auto px-2 text-white h-full flex flex-col justify-center text-center uppercase`}
        >
          <Image
            src='/logo-white.png'
            width={100}
            height={100}
            alt='Logo of NDT'
            className='lg:hidden mx-auto animate-pulse'
          />
          <Image
            src='/logo-white.png'
            width={150}
            height={150}
            alt='Logo of NDT'
            className='hidden lg:block mx-auto animate-pulse'
          />
          <div className={`${lusitana.className} mt-14 text-5xl font-extrabold tracking-widest lg:text-5xl lg:leading-tight`}>
            Solusi Digital Terbaik untuk Pengalaman Pengguna Luar Biasa.
          </div>
        </div>
      </div>
    </section>
  );
});

MainComponent.displayName = 'MainComponent';
export default MainComponent;
