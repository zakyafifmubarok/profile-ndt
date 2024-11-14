import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import { ThemeModeScript } from "flowbite-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>CV Nahcoda Digital Teknologi</title>
        <meta name="description" content="Portofolio CV.NAHCODA DIGITAL TEKNOLOGI" />
        <ThemeModeScript />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
