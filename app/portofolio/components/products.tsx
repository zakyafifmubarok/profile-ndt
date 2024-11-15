'use client';

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Image from 'next/image';
import { nunito } from '@/app/ui/fonts'
import IconPrevious from '@/app/ui/icons/IconPrevious'
import IconNext from '@/app/ui/icons/IconNext'

type ProductsComponentProps = object

const ProductsComponent = forwardRef<HTMLElement, ProductsComponentProps>((props, ref) => {
  const productRef = useRef<HTMLElement | null>(null);
  useImperativeHandle(ref, () => productRef.current as HTMLElement);

  const [isProductVisible, setProductVisible] = useState(false);
  const [isProductImageVisible, setProductImageVisible] = useState(false);

  const [currentSlider, setCurrentSlider] = useState(0)
  const slides = [
    {
      title: 'SIPLah TOKOLADANG',
      subtitle: '(PT. Ladang Karya Husada)',
      image: '/products/siplah.tokoladang.co.id.png',
      description: `SIPLah Toko Ladang adalah platform pasar daring yang menyediakanbarang dan jasa untuk
        satuan pendidikan. SIPLah Toko Ladang merupakan bagian dari Sistem Informasi Pengadaan
        Sekolah (SIPLah) yang merupakan sistem elektronik untuk pengadaan barang dan jasa oleh
        satuan pendidikan.`,
      class: 'from-slate-700 via-slate-500 to-cyan-600',
    },
    {
      title: 'Toko Daring TOKOLADANG',
      subtitle: '(PT. Ladang Karya Husada)',
      image: '/products/tokoladang.co.id.png',
      description: `Toko Daring merupakan sebuah sistem informasi yang dikembangkan dan dikelola oleh
        Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah (LKPP) untuk memfasilitasi pelaksanaan
        e-purchasing Pengadaan Barang/Jasa di K/L/PD melalui PPMSE yang berbentuk marketplace dan
        ritel daring.`,
      class: 'from-orange-600 via-slate-500 to-slate-700',
    },
    {
      title: 'Aplikasi BAYUR',
      subtitle: '(CV. Nahcoda Digital Teknologi)',
      image: '/products/bayur.png',
      description: `Aplikasi belanja sayur online adalah platform digital yang memungkinkan pengguna untuk
        membeli berbagai macam sayur dan bahan makanan segar secara praktis dan efisien. Melalui
        aplikasi ini, pengguna dapat menjelajahi katalog produk sayur, memilih item yang diinginkan,
        menambahkannya ke keranjang belanja, dan melakukan pembayaran secara online.`,
      class: 'from-orange-600 via-slate-500 to-slate-700',
    },
    {
      title: 'Aplikasi Gain Profit',
      subtitle: '(Duta Swalayan, Alyasini Mart)',
      image: '/products/gain-profit.png',
      description: `Aplikasi Gain Profit adalah platform digital yang dirancang untuk membantu pengguna
        mengelola dan memaksimalkan keuntungan finansial mereka.`,
      class: 'from-orange-600 via-slate-500 to-slate-700',
    },
    {
      title: 'Sistem Administrasi Keuangan',
      subtitle: '(Universitas Yudharta Pasuruan)',
      image: '/products/administrasi.png',
      description: `Aplikasi Sistem Administrasi Keuangan adalah perangkat lunak yang dirancang untuk
          membantu pengelolaan keuangan secara efektif dan efisien dalam suatu organisasi,
          perusahaan, atau instansi.`,
      class: 'from-orange-600 via-slate-500 to-slate-700',
    },
  ]
  const slideCount = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider((prev) => (prev + 1) % slideCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideCount]);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(productRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={productRef}
      className={`relative transform transition-opacity duration-1000 ${
        isProductVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className='absolute bg-gradient-to-r from-slate-500 via-white to-slate-500 inset-0 opacity-50'>
      </div>
      <div className='overflow-hidden min-h-[80vh]'>
        <div className='relative max-w-5xl mx-auto py-20 lg:py-28 px-6'>
          <h1 className={`${nunito.className} text-left text-4xl font-medium uppercase`}>Our Product</h1>
          <div className="mt-6 w-full overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`h-80 bg-gradient-to-r ${slide.class} w-full shrink-0 p-8 flex justify-center items-center gap-6 rounded  md:h-96`}
                >
                  <div className={`transform transition-opacity duration-1000 z-50 md:w-1/2
                    ${isProductImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
                  >
                    <div className='mb-4 font-bold text-white text-xl text-center uppercase md:hidden'>
                      {slide.title}
                    </div>
                    <Image
                      src={slide.image}
                      width={1000}
                      height={760}
                      alt={`Screenshots of the ${slide.title}`}
                    />
                  </div>
                  <div className={`hidden w-1/2 text-white md:block ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <div className='font-bold text-xl uppercase'>
                      {slide.title}
                    </div>
                    <p>{slide.subtitle}</p>
                    <p className='mt-2 text-justify'>
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 left-2 inline-flex size-8 items-center justify-center rounded-full bg-slate-100 bg-opacity-60 hover:bg-opacity-80"
            onClick={() => setCurrentSlider((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
          >
            <IconPrevious />  
          </button>
          <button
            onClick={() => setCurrentSlider((prev) => (prev < slides.length - 1 ? prev + 1 : 0))}
            className="absolute top-1/2 right-2 inline-flex size-8 items-center justify-center rounded-full bg-slate-100 bg-opacity-60 hover:bg-opacity-80"
          >
            <IconNext />
          </button>
          <div className="hidden mt-8 h-96">
            <div className='flex overflow-hidden'>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-transform duration-500 bg-gradient-to-r ${slide.class} w-full h-96
                    shrink-0 p-8 flex justify-center items-center gap-6 rounded
                    ${currentSlider == 0 ? 'translate-x-0' : '-translate-x-full'}
                  `}
                >
                  <div
                    className={`bg-slate-600 w-full transform transition-opacity duration-1000 md:w-1/2 ${
                      isProductImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    } ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
                  >
                    <Image
                      src={slide.image}
                      width={1000}
                      height={760}
                      alt={`Screenshots of the ${slide.title}`}
                    />
                  </div>
                  <div className={`hidden w-1/2 text-white md:block ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <div className='font-bold text-xl uppercase'>
                      {slide.title}
                    </div>
                    <p>{slide.subtitle}</p>
                    <p className='mt-2 text-justify'>
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
})

ProductsComponent.displayName = 'ProductsComponent';
export default ProductsComponent
