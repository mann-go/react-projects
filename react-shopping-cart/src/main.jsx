import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Landing from "./components/home/landing/Landing.jsx";
import Products from "./components/product/products/Products.jsx";
import ErrorPage from "./components/reusable/error-page/ErrorPage.jsx";
import { BasketProvider } from "./components/contexts/BasketContext.jsx";
import Checkout from "./components/checkout/Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <BasketProvider>
        <App></App>
      </BasketProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "products/:category",
        element: <Products />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
