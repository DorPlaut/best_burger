import { Inter } from 'next/font/google';
import './globals.css';
import Background from './layout/Background';
import Header from './layout/Header';
import BackUpBtn from './layout/nav/BackUpBtn';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Best Burger',
  description: 'Home of the Best Burger',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        <main>
          <Header />
          {children}
        </main>
        <BackUpBtn />
      </body>
    </html>
  );
}
