import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import WelcomePage from "./componets/WelcomePage/WelcomePage";
const ThankYouPage = lazy(
  () => import("./componets/ThankYouAndPayment/ThankYouPage/ThankYouPage"),
);
const Payment = lazy(() => import("./componets/Payment/Payment"));
import AdminDashbord from "./componets/admin/AdminDashbord";
function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/email/access",
        element: <ThankYouPage />,
      },
      {
        path: "/dig/payment",
        element: <Payment />,
      },
      {
        path: "/admin/dashbord/true",
        element: <AdminDashbord />,
      },
    ],
    {
      basename: "/digital-marketing-guide/",
    },
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
