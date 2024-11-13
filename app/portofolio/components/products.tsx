'use client';

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Image from 'next/image';

type ProductsComponentProps = object

const ProductsComponent = forwardRef<HTMLElement, ProductsComponentProps>((props, ref) => {
  const productRef = useRef<HTMLElement | null>(null);
  useImperativeHandle(ref, () => productRef.current as HTMLElement);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(productRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={productRef}
      className={`transform transition-opacity duration-1000 ${
        isProductVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className='bg-gradient-to-b to-slate-300 from-white relative overflow-hidden min-h-[80vh]'>
        <div className='max-w-7xl mx-auto py-20 lg:py-28 px-6'>
          <h1 className='text-left text-4xl font-medium uppercase'>Our Product</h1>
          <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6'>
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
                src='/products/siplah.tokoladang.co.id.png'
                width={1000}
                height={760}
                alt='Screenshots of the siplah.tokoladang.co.id'
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
                src='/products/tokoladang.co.id.png'
                width={1000}
                height={760}
                alt='Screenshots of the tokoladang.co.id'
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
  );
})


ProductsComponent.displayName = 'ProductsComponent';
export default ProductsComponent
