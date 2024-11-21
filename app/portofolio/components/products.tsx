'use client';

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { nunito } from '@/app/ui/fonts'
import IconPrevious from '@/app/ui/icons/IconPrevious'
import IconNext from '@/app/ui/icons/IconNext'

type ProductsComponentProps = object

const ProductsComponent = forwardRef<HTMLElement, ProductsComponentProps>((props, ref) => {
  const productRef = useRef<HTMLElement | null>(null);
  useImperativeHandle(ref, () => productRef.current as HTMLElement);

  const [isProductVisible, setProductVisible] = useState(false);

  const [currentSlider, setCurrentSlider] = useState(0)
  const slides = [
    {
      title: 'SIPLah TOKOLADANG',
      subtitle: '(PT. Ladang Karya Husada)',
      image: '/products/siplah.jpg',
      description: `SIPLah Toko Ladang adalah platform pasar daring yang menyediakan barang dan
        jasa untuk satuan pendidikan. SIPLah Toko Ladang merupakan bagian dari Sistem Informasi
        Pengadaan Sekolah (SIPLah) yang merupakan sistem elektronik untuk pengadaan barang dan
        jasa oleh satuan pendidikan.`,
    },
    {
      title: 'Toko Daring TOKOLADANG',
      subtitle: '(PT. Ladang Karya Husada)',
      image: '/products/tokoladang.co.id.png',
      description: `Toko Daring merupakan sebuah sistem informasi yang dikembangkan dan dikelola oleh
        Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah (LKPP) untuk memfasilitasi pelaksanaan
        e-purchasing Pengadaan Barang/Jasa di K/L/PD melalui PPMSE yang berbentuk marketplace dan
        ritel daring.`,
    },
    {
      title: 'Aplikasi BAYUR',
      subtitle: '(CV. Nahcoda Digital Teknologi)',
      image: '/products/bayur.png',
      description: `Aplikasi belanja sayur online adalah platform digital yang memungkinkan pengguna
        untuk membeli berbagai macam sayur dan bahan makanan segar secara praktis dan efisien. Melalui
        aplikasi ini, pengguna dapat menjelajahi katalog produk sayur, memilih item yang diinginkan,
        menambahkannya ke keranjang belanja, dan melakukan pembayaran secara online.`,
    },
    {
      title: 'Aplikasi Gain Profit',
      subtitle: '(Duta Swalayan, Alyasini Mart)',
      image: '/products/gain-profit.png',
      description: `Aplikasi Gain Profit adalah platform digital yang dirancang untuk membantu pengguna
        mengelola dan memaksimalkan keuntungan finansial mereka.`,
    },
    {
      title: 'Sistem Administrasi Keuangan',
      subtitle: '(Universitas Yudharta Pasuruan)',
      image: '/products/administrasi.png',
      description: `Aplikasi Sistem Administrasi Keuangan adalah perangkat lunak yang dirancang untuk
          membantu pengelolaan keuangan secara efektif dan efisien dalam suatu organisasi,
          perusahaan, atau instansi.`,
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
      <div
        className={`absolute bg-cover bg-center inset-0 opacity-60 ease-in-out duration-300`}
        style={{
          backgroundImage: `url("${slides[currentSlider]?.image || ''}")`,
        }}
      >
      </div>
      <div className={`absolute bg-cover bg-center inset-0 bg-slate-900 opacity-50`}></div>
      <div className='relative flex max-w-5xl mx-auto overflow-hidden min-h-[80vh]'>
        <div className='max-w-3xl m-auto py-20 lg:py-28 px-6'>
          <div className="mt-6 w-full overflow-hidden my-auto">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`text-white w-full shrink-0 py-8 justify-center items-center gap-6 rounded`}
                >
                  <div className={`${nunito.className} font-bold text-4xl uppercase text-shadow-md`}>
                    {slide.title}
                  </div>
                  <p className='text-2xl'>{slide.subtitle}</p>
                  <p className='mt-10 text-lg font-medium text-justify'>
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 left-2 inline-flex size-8 items-center justify-center rounded-full bg-slate-100 bg-opacity-80 hover:bg-opacity-80"
            onClick={() => setCurrentSlider((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
          >
            <IconPrevious />  
          </button>
          <button
            onClick={() => setCurrentSlider((prev) => (prev < slides.length - 1 ? prev + 1 : 0))}
            className="absolute top-1/2 right-2 inline-flex size-8 items-center justify-center rounded-full bg-slate-100 bg-opacity-80 hover:bg-opacity-80"
          >
            <IconNext />
          </button>
        </div>
      </div>
    </section>
  );
})

ProductsComponent.displayName = 'ProductsComponent';
export default ProductsComponent
