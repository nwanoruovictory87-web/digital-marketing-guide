import { createHashRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import WelcomePage from "./componets/WelcomePage/WelcomePage";
const ThankYouPage = lazy(
  () => import("./componets/ThankYouAndPayment/ThankYouPage/ThankYouPage"),
);
const Payment = lazy(() => import("./componets/Payment/Payment"));
const Pending = lazy(() => import("./componets/Payment/Pending"));
import AdminDashbord from "./componets/admin/AdminDashbord";
import { Toaster } from "react-hot-toast";
function App() {
  const routes = createHashRouter([
    {
      path: "/",
      element: <WelcomePage />,
    },
    {
      path: "/email/access",
      element: <ThankYouPage />,
    },
    {
      path: "/dmg/payment/:id",
      element: <Payment />,
    },
    {
      path: "/payment/pending/dmg/:id",
      element: <Pending />,
    },
    {
      path: "/admin/dashboard/true",
      element: <AdminDashbord />,
    },
  ]);
  return (
    <>
      <Toaster position="top-center" />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
