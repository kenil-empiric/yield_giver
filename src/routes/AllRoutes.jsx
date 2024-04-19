import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/loaders/Loading";
import Scroll from "../utils/Scroll";
import AdminPrivateRoute from "./AdminPrivateRoute";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Pool = lazy(() => import("../pages/Pool"));
const PoolDetails = lazy(() => import("../pages/PoolDetails"));
const AdminForm = lazy(() => import("../admin/AdminForm"));

function AllRoutes() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Scroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/pool" element={<Pool />} />
          <Route path="/pool/:id" element={<PoolDetails />} />
          <Route
            path="/admin/form"
            element={
              <AdminPrivateRoute>
                <AdminForm />
              </AdminPrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default AllRoutes;
