"use client";

// import hamesha top per

import "./globals.css";
import Header from "@/components/header/header.js";
import Footer from "@/components/footer/footer";
import {Provider} from 'react-redux';
import {meraStore} from '@/store/store.js';

  import { ToastContainer, toast } from 'react-toastify';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.css" ></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"  />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" ></script>
      </head>
      <body>


          
      <Provider store={meraStore}>

          <Header></Header>
          
          <main>
          {/* yeh aapke page.js hote hn */}
          {children}
          </main>

      </Provider>

        <Footer></Footer>

        <ToastContainer></ToastContainer>
        
        
        </body>
    </html>
  );
}
