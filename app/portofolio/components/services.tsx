'use client';

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Image from 'next/image';
import { poppins } from '@/app/ui/fonts'

type ServicesComponentProps = object

const ServicesComponent = forwardRef<HTMLElement, ServicesComponentProps>((props, ref) => {
  const servicesRef = useRef<HTMLElement | null>(null);
  useImperativeHandle(ref, () => servicesRef.current as HTMLElement);

  const [isServicesVisible, setVissionVisible] = useState(false);
  const [isServiceDetailsVisible, setMissionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio >= 0.4) {
            setVissionVisible(true);
          }
          if (entry.intersectionRatio >= 0.7) {
            setMissionVisible(true);
          }
          if (entry.intersectionRatio >= 0.7) {
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: [0.4, 0.7] }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={servicesRef}
      className='relative overflow-hidden min-h-[80vh] bg-slate-950 text-white'
    >
      <div className='absolute top-[200px] h-screen inset-0 opacity-50'
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      >
        <Image
          src='/background/spotlight.webp'
          alt='Screenshots of the siplah.tokoladang.co.id'
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={`${poppins.className} max-w-4xl mx-auto py-40 px-6`}>
        <div
          className={`transform transition-transform duration-1000 ${
            isServicesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-40'
          }`}
        >
          <h1 className='text-5xl'>
            Our Offered Services
          </h1>
          <p className='mt-4 text-justify'>
            Kami menawarkan solusi yang fleksibel yang dapat disesuaikan dengan perubahan bisnis Anda
          </p>
        </div>
        <div className={`mt-8 space-y-4 text-lg transform transition-transform duration-1000 ${
            isServiceDetailsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-40'
          }`}
        >
          <li>Aplikasi Web</li>
          <li>Aplikasi Mobile</li>
          <li>Platform Digital</li>
          <li>Kemanan Siber</li>
          <li>Konsultasi IT, dll.</li>
        </div>
      </div>
    </section>
  );
})


ServicesComponent.displayName = 'ServicesComponent';
export default ServicesComponent
