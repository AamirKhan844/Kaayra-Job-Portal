import React from "react";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Signup from "./components/auth/Signup";
import Jobs from "./components/Jobs";
import Profile from "./components/Profile";
import AppliedJobs from "./components/AppliedJobs";
import JobDescription from "./components/JobDescription";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/jobs",
      element: <Jobs />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/profile/applied-jobs",
      element: <AppliedJobs />,
    },
    {
      path: "/description/:id",
      element: <JobDescription />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
