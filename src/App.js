import Navigation from './Components/Navigation';
import { Grid } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ScheduleEstimate from './Components/SchedueEstimate';
import './App.css';

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
        <Grid container
          spacing={0}
          direction="row"
          alignItems="right"
          justifyContent="right"
          style={{marginTop: 150, }}>
            <Grid item xs={12} style={{marginTop: 40}}>
              <Header />
            </Grid>
            <Grid item xs ={6} sm={6} md={4} lg={3} style ={{ display: 'flex' }}>
              <ScheduleEstimate />
            </Grid>
        </Grid>
        
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
