import '@/app/ui/global.css';
import { inter, lusitana } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>
        <nav>
          <p>peter</p>
        </nav>
        {children}</body>
    </html>
  );
}
