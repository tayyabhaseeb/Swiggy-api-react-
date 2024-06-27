import React, { Suspense, lazy } from "react";

import Body from "./Pages/Body";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import useOnline from "./hooks/useOnline";
import Offline from "./components/Offline";
import Shimmer from "./components/Shimmer";
import Instamart from "./Pages/Instamart";

const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Cart = lazy(() => import("./Pages/Cart"));
const RestaurantPage = lazy(() => import("./Pages/RestaurantPage"));

function App() {
  const online = useOnline();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={online ? <Body /> : <Offline />} />
          <Route
            path="about"
            element={
              <Suspense fallback={<Shimmer />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<Shimmer />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="cart"
            element={
              <Suspense fallback={<Shimmer />}>
                <Cart />
              </Suspense>
            }
          />

          <Route
            path="instamart"
            element={
              <Suspense fallback={<Shimmer />}>
                <Instamart />
              </Suspense>
            }
          />
          <Route
            path="restaurant/:id"
            element={
              online ? (
                <Suspense fallback={<Shimmer />}>
                  <RestaurantPage />
                </Suspense>
              ) : (
                <Offline />
              )
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* <Header />
        <Body />
        <Footer /> */

/* 
      
      Header
           LOGO
           NAV ELEMENTS
           LOGIN/LOGOUT
      Body
           SEARCH ELEMENT
           SEARCH BUTTON
           CARDS OF RESTAURANTS

      Footer
      
      */
