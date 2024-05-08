import { Outlet } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


const BlankLayout = () => (
  <>
    <Outlet />
    <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Flip
    />
    <ToastContainer />
  </>
);

export default BlankLayout;
