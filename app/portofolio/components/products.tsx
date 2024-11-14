'use client';

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Image from 'next/image';
import { Carousel } from "flowbite-react";

type ProductsComponentProps = object

const ProductsComponent = forwardRef<HTMLElement, ProductsComponentProps>((props, ref) => {
  const productRef = useRef<HTMLElement | null>(null);
  useImperativeHandle(ref, () => productRef.current as HTMLElement);

  const [isProductVisible, setProductVisible] = useState(false);
  const [isProductImageVisible, setProductImageVisible] = useState(false);

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
      image: '',
      description: `Aplikasi belanja sayur online adalah platform digital yang memungkinkan pengguna untuk
        membeli berbagai macam sayur dan bahan makanan segar secara praktis dan efisien. Melalui
        aplikasi ini, pengguna dapat menjelajahi katalog produk sayur, memilih item yang diinginkan,
        menambahkannya ke keranjang belanja, dan melakukan pembayaran secara online.`,
      class: 'from-orange-600 via-slate-500 to-slate-700',
    },
    {
      title: 'Aplikasi Gain Profit',
      subtitle: '(Duta Swalayan, Alyasini Mart)',
      image: '',
      description: `Aplikasi Gain Profit adalah platform digital yang dirancang untuk membantu pengguna
        mengelola dan memaksimalkan keuntungan finansial mereka.`,
      class: 'from-orange-600 via-slate-500 to-slate-700',
    },
    {
      title: 'Sistem Administrasi Keuangan',
      subtitle: '(Universitas Yudharta Pasuruan)',
      image: '',
      description: `Aplikasi Sistem Administrasi Keuangan adalah perangkat lunak yang dirancang untuk
          membantu pengelolaan keuangan secara efektif dan efisien dalam suatu organisasi,
          perusahaan, atau instansi.`,
      class: 'from-orange-600 via-slate-500 to-slate-700',
    },
  ]

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
      <div className='relative overflow-hidden min-h-[80vh]'>
        <div className='relative max-w-5xl mx-auto py-20 lg:py-28 px-6'>
          <h1 className='text-left text-4xl font-medium uppercase'>Our Product</h1>
          <div className="mt-8 h-96">
            <Carousel>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${slide.class} w-full h-full shrink-0 p-8 flex justify-center items-center gap-6 rounded`}
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
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
})



ProductsComponent.displayName = 'ProductsComponent';
export default ProductsComponent
