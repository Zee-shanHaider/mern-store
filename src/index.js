import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import { MainLayout } from './layouts';
import Shop from './pages/shop/Shop';
import Contact from './pages/contact/Contact';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "shop",
          element: <Shop/>
        },
        {
          path: "contact",
          element: <Contact/>
        },
        {
          path: "product/:id",
          element: <Product/>
        },
        {
          path: "cart",
          element: <Cart/>
        },
        {
          path: "checkout",
          element: <Checkout/>
        },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={"521437710113-ineh3ujkc0n4jpnku12vlr8n9et9l4o4.apps.googleusercontent.com"}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();

