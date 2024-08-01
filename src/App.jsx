import React from "react";
import Welcome from "./pages/Welcome";
import "./styles/main.css";
import StepOne from './pages/StepOne';
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from './pages/Thanks'
import { createBrowserRouter, RouterProvider } from "react-router-dom";




const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Welcome />,

    },
    {
      path: 'Step_One',
      element: <StepOne />,

    },
    {
      path: 'Step_Two',
      element: <StepTwo />,

    },
    {
      path: 'Step-Three',
      element: <StepThree />,

    },
    {
      path: 'Step-Four',
      element: <StepFour />,

    },
    {
      path: 'Thanks',
      element: <Thanks />,

    }

  ])

  return (
    <RouterProvider router={router} />
  );
};

export default App;