import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudyMaterial from "./WebPages/StudyMaterial";
import MyCourse from "./WebPages/MyCourse";
import ProfilePage from "./WebPages/ProfilePage";
import KidsContent from "././Components/Kidscontent";
import CodingContent from "././Components/CodingContent";
import Creativity from "././Components/CreativityContent";
import Homepage from "./WebPages/Homepage";
import Createaccount from "./Components/CreateAccount";
import RegisterasTeacher from "./WebPages/RegisterasTeacher";
import Loginform from "./Components/LoginForm";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import InstuteTeaching from "./Components/InstuteTeaching";
import PgCourse from "./Components/Primary";
import UgCourse from "./Components/UgCourse";
import JrCollege from "./Components/JrCollege";
import Primary from "./Components/Primary";
import Government from "./Components/Government";
import Videoplayer from "./Components/videoplayer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: "/studymaterial",
    element: <StudyMaterial />,
  },
  {
    path: "/login",
    element: <Loginform />,
  },
  {
    path: "/mycourse",
    element: <MyCourse />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/registerteacher",
    element: <RegisterasTeacher />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/createaccount",
    element: <Createaccount />,
  },
  {
    path: "/institutelogin",
    element: <InstuteTeaching />,
  },
  {
    path: "/ugcourse",
    element: <UgCourse />,
  },
  {
    path: "/jrcollege",
    element: <JrCollege />,
  },
  {
    path: "/primary",
    element: <Primary />,
  },
  {
    path: "/creativity",
    element: <Creativity />,
  },
  {
    path: "/coding",
    element: <CodingContent />,
  },
  {
    path: "/kids",
    element: <KidsContent />,
  },
  {
    path: "/government",
    element: <Government />,
  },
  {
    path: "/videoplayer",
    element: <Videoplayer />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
