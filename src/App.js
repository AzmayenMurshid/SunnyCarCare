import Navigation from './Components/Navigation';
import { Grid, Typography } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ScheduleEstimate from './Components/SchedueEstimate';
import CardView from './Components/CardView';
import Footer from './Components/Footer';

import './App.css';
import Packages from './Components/Packages';

const Header =  () => {
  return (
      <>
        <div className='header'>
          <h1 className='header__title'>
              Sunny Car Care
          </h1>
          <p className='header__subtitle'>
            Collision & Repair
          </p>
        </div>
          
      </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <Header />
        <CardView />
        <h1 className='services'>
          Services
        </h1>
        <Packages />
        <ScheduleEstimate />
        <Footer />
      </>
    ),
  },
  {
    path: "/services",
    // element: (<Login />),
  },
  {
    path: "/about-us",
    // element: (<Signin />),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
