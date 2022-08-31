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
      <div className="flex min-h-screen relative flex-col justify-between">
        <header>
          <Navbar />
          <SecondaryNav />
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
