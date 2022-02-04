import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ConstextProvider } from "./contexts/Context";
import UserPage from "./pages/UserPage";

const AllRoutes = () => {
  return (
    <ConstextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </ConstextProvider>
  );
};

export default AllRoutes;
