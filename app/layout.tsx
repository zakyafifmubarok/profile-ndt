import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

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
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
