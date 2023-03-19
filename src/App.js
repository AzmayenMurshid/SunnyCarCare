import Navigation from './Components/Navigation';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import './App.css';

import Login from './Components/Login';
import Signin from './Components/Signin';
import ScheduleEstimate from './Components/SchedueEstimate';
import { Grid } from '@mui/material';

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
          style={{marginTop: 100, marginLeft: -40}}>
            <Grid item xs ={12} sm={6} md={4} lg={3} style ={{ display: 'flex' }}>
              <ScheduleEstimate />
            </Grid>
        </Grid>
        
      </>
    ),
  },
  {
    path: "/login",
    element: (<Login />),
  },
  {
    path: "/signin",
    element: (<Signin />),
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
