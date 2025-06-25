import App from "./App.jsx";
import Landing from "./components/home/landing/Landing.jsx";
import Products from "./components/product/products/Products.jsx";
import ErrorPage from "./components/reusable/error-page/ErrorPage.jsx";
import { BasketProvider } from "./components/contexts/BasketContext.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import PageTitle from "./components/reusable/page-title/PageTItle.jsx";

const routes = [
  {
    path: "/",
    element: (
      <BasketProvider>
        <App />
      </BasketProvider>
    ),
    errorElement: (
      <>
        <PageTitle title="404 | Page not found" />
        <ErrorPage />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <PageTitle title="Home Page" />
            <Landing />
          </>
        ),
      },
      {
        path: "products/:category",
        element: (
          <>
            <PageTitle title="Products" />
            <Products />,
          </>
        ),
      },
      {
        path: "checkout",
        element: (
          <>
            <PageTitle title="Checkout" />
            <Checkout />,
          </>
        ),
      },
    ],
  },
];

export default routes;
