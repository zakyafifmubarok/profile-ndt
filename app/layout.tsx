import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nahcoda Digital Teknologi — Company Profile</title>
        <meta
          name="description"
          content="Portofolio CV.NAHCODA DIGITAL TEKNOLOGI"
        />
      </head>
      <body className={`${inter.className} antialiased text-slate-200`}>
        {children}
      </body>
    </html>
  );
}