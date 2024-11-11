/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { lusitana, poppins } from '@/app/ui/fonts'

export default function PortofolioPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const [offset, setOffset] = useState(0);
  const mainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setOffset(window.scrollY * 0.5)
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const createRandomLine = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const container = mainRef.current as any;
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

  const aboutRef = useRef(null);
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
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const vissionRef = useRef(null);
  const [isVissionVisible, setVissionVisible] = useState(false);
  const [isMissionVisible, setMissionVisible] = useState(false);

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

    if (vissionRef.current) {
      observer.observe(vissionRef.current);
    }

    return () => {
      if (vissionRef.current) {
        observer.unobserve(vissionRef.current);
      }
    };
  }, []);


  const productRef = useRef(null);
  const [isProductVisible, setProductVisible] = useState(false);
  const [isProductImageVisible, setProductImageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio >= 0.2) {
            setProductVisible(true);
          }
          if (entry.intersectionRatio >= 0.4) {
            setProductImageVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: [0.2, 0.4] }
    );

    if (productRef.current) {
      observer.observe(productRef.current);
    }

    return () => {
      if (productRef.current) {
        observer.unobserve(productRef.current);
      }
    };
  }, []);

  return (
    <main className='relative'>
      {/* Navbar section */}
      <div className={`fixed w-full opacity-80 top-0 z-50 py-2 px-4 text-white ${
        isScrolled ? 'bg-gray-950' : 'bg-transparent'
      }`}>
        <div className='flex justify-between'>
          <div>
            <button className='hover:underline'>Home</button>
          </div>
          <div className='flex gap-4'>
            <button className='hover:underline'>Contact</button>
            <button className='hover:underline'>About</button>
          </div>
        </div>
      </div>

      {/* Main section */}
      <section
        ref={mainRef}
        className="z-10 relative overflow-hidden h-[90vh] animate-fade-in"
      >
        <div className='absolute size-full bg- inset-0 bg-gray-950 opacity-90'
          style={{ transform: `translateY(${offset}px)` }}
        >
          <Image
            src="/background/bg-1.png"
            alt="Screenshots of the siplah.tokoladang.co.id"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className="z-10 absolute inset-0 bg-cover bg-center transition-transform duration-200 ease-linear"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <div className={`${lusitana.className} h-full flex flex-col justify-center text-center uppercase text-shadow`}>
            <h1 className="text-5xl lg:text-9xl font-extrabold tracking-widest">
              Nahcoda
            </h1>
            <p className="tracking-widest lg:text-2xl lg:tracking-letter18">Digital Teknologi</p>
          </div>
        </div>
      </section>

      {/* About section */}
      <section
        ref={aboutRef}
        className={`z-20 transform transition-opacity duration-1000 ${
          isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="bg-gradient-to-b to-white from-slate-300 relative overflow-hidden min-h-[40vh]">
          <div className="max-w-7xl mx-auto py-20 lg:py-28 px-6">
            <div className="flex gap-20">
              <div className={`${poppins.className}`}>
                <h1 className="text-4xl font-bold uppercase">About the Company</h1>
                <p className="mt-4 text-xl text-justify">
                  CV Nahcoda Digital Teknologi adalah perusahaan teknologi informasi yang
                  berdiri sejak Tahun 2019 yang awalnya bernama PT Juru Ketik Nusantara,
                  kemudian pada Tahun 2022 bertransformasi menjadi CV Nahcoda Digital
                  Teknologi. Kami memiliki pengalaman luas dalam pengembangan aplikasi web,
                  aplikasi mobile, keamanan siber, dan big data. Dengan tim yang terdiri
                  dari para ahli teknologi yang berpengalaman, kami berkomitmen untuk
                  memberikan layanan terbaik kepada anda.
                </p>
              </div>
              <Image
                src="/background/picture1.png"
                width={500}
                height={380}
                alt="Screenshots of the tokoladang.co.id"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision section */}
      <section
        ref={vissionRef}
        className="relative overflow-hidden h-full max-h-[100vh] bg-gray-950 text-white"
      >
        <div className='absolute top-[300px] size-full inset-0 opacity-50'
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        >
          <Image
            src="/background/spotlight.webp"
            alt="Screenshots of the siplah.tokoladang.co.id"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* <div className='max-w-7xl mx-auto w-full h-full bg-red-300'>
        </div> */}
        <div className={`${poppins.className} max-w-4xl mx-auto py-40 px-6`}>
          <div
            className={`transform transition-transform duration-1000 ${
              isVissionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-40'
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
              isMissionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-40'
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

      {/* Product section */}
      <section
        ref={productRef}
        className={`transform transition-opacity duration-1000 ${
          isProductVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="bg-gradient-to-b to-slate-300 from-white relative overflow-hidden min-h-[40vh]">
          <div className='max-w-7xl mx-auto py-20 lg:py-28 px-6'>
            <h1 className='text-left text-4xl font-medium uppercase'>Our Product</h1>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className={`transform transition-opacity duration-1000 ${
                  isProductImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className='mb-4'>
                  <div className='font-bold text-xl uppercase'>
                    Marketplace TOKO LADANG
                  </div>
                  <p>(PT. Ladang Karya Husada)</p>
                </div>
                <Image
                  src="/products/siplah.tokoladang.co.id.png"
                  width={1000}
                  height={760}
                  alt="Screenshots of the siplah.tokoladang.co.id"
                />
              </div>
              <div className={`transform transition-opacity duration-1000 delay-500 ${
                  isProductImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className='mb-4'>
                  <div className='font-bold text-xl uppercase'>
                    Toko Daring TOKO LADANG
                  </div>
                  <p>(PT. Ladang Karya Husada)</p>
                </div>
                <Image
                  src="/products/tokoladang.co.id.png"
                  width={1000}
                  height={760}
                  alt="Screenshots of the tokoladang.co.id"
                />
              </div>
              <div>
                <div className='font-bold text-xl uppercase'>
                  Aplikasi Gain Profit
                </div>
                <p>(Duta Swalayan, Alyasini Mart)</p>
              </div>
              <div>
                <div className='font-bold text-xl uppercase'>
                  Aplikasi BAYUR (Belanja Buah dan Sayur)
                </div>
                <p>(Bayur Melijo Online)</p>
              </div>
              <div>
                <div className='font-bold text-xl uppercase'>
                  Sistem Administrasi Keuangan
                </div>
                <p>(Universitas Yudharta Pasuruan)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
          <form action="#" className="space-y-8">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg "
                  placeholder="name@flowbite.com"
                  required
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                  placeholder="Let us know how we can help you"
                  required
                />
            </div>
            <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                  placeholder="Leave a comment..."
                ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center border rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800"
              >Send message</button
            >
          </form>
        </div>
      </section>
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
