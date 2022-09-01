import React from 'react';
import Head from 'next/head';
import Navbar from './navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './footer/Footer';
import { SecondaryNav } from './secondary_nav/SecondaryNav';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Heich' : 'Heich'}</title>
        <meta
          name="description"
          content="Heich,An e-commerce application by Karn"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-left" limit={1} />
      <div className="flex relative min-h-screen flex-col justify-between">
        <header className="w-full bg-white z-40">
          <Navbar />
          <SecondaryNav />
        </header>
        <div className="mx-auto">
          <main className="container mx-auto mt-4 px-4 ">{children}</main>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
