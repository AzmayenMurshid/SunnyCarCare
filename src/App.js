import Navigation from './Components/Navigation';
import { Grid } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ScheduleEstimate from './Components/SchedueEstimate';
import CardView from './Components/CardView';

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
        <Packages />
        <ScheduleEstimate />
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
