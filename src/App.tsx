import "./App.css";
import { SiteHeader } from "./components/header/SiteHeader";
import { AppSidebar } from "./components/sidebar/AppSidebar";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import DashboardPage from "./pages/DashBoard";
import LoginPage from "./pages/Login";
import Account from "./pages/Account";
import SendSms from "./pages/SendSms";
import CustomSMS from "./pages/CustomSMS";

const AppLayout = () => (
  <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  </div>
);

// Define routes
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/accounts",
        element: <Account />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/send-sms",
        element: <SendSms />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/custom-sms",
        element: <CustomSMS />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
