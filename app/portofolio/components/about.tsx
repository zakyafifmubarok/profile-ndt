'use client';

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { poppins } from '@/app/ui/fonts';

type AboutComponentProps = object

const AboutComponent = forwardRef<HTMLElement, AboutComponentProps>((props, ref) => {
  const aboutRef = useRef<HTMLElement | null>(null);
  useImperativeHandle(ref, () => aboutRef.current as HTMLElement);

  const [isAboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={aboutRef}
      className={`transform transition-opacity duration-1000 ${
        isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className='bg-slate-900 relative px-2 text-white overflow-hidden'>
        <div className='flex justify-center items-center max-w-5xl min-h-[60vh] mx-auto'>
          <div className='flex items-center gap-20'>
            <div className={`w-full ${poppins.className}`}>
              <h1 className='text-3xl font-bold uppercase md:text-4xl'>About the Company</h1>
              <p className='mt-4 text-justify md:text-xl'>
                CV Nahcoda Digital Teknologi adalah perusahaan teknologi informasi yang didirikan
                pada tahun 2019 dengan nama awal PT Juru Ketik Nusantara. Pada tahun 2022, perusahaan
                bertransformasi menjadi CV Nahcoda Digital Teknologi, mencerminkan visi baru untuk
                mendukung kebutuhan teknologi yang terus berkembang.
              </p>
              <p className='mt-4 text-justify md:text-xl'>
                Kami memiliki keahlian luas dalam pengembangan aplikasi web, aplikasi mobile,
                keamanan siber, dan big data. Dengan tim yang terdiri dari para profesional
                berpengalaman di bidang teknologi, kami berkomitmen untuk memberikan solusi
                terbaik yang mengutamakan kualitas, inovasi, dan kepuasan klien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
})


AboutComponent.displayName = 'AboutComponent';
export default AboutComponent
