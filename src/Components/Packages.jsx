import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const arr = [{}, {}, {}, {}, {}, {}];

function Package() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: window.innerWidth,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 'relative', height: 'relative' }}>
            <Img alt="complex" src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Lamborghini-mountain-fog-sports-car-photos.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container style={{marginTop: 50}}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                Standard license
              </Typography>
              <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum vitae, vero, error culpa repellat molestias reiciendis eligendi asperiores consequuntur maxime? Cumque porro ea repudiandae. Deleniti pariatur placeat eveniet enim. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor in ratione sunt facilis! Tenetur veritatis dolore, quis iure delectus amet dolorum? Culpa et est quod repudiandae neque aliquid error ea?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum vitae, vero, error culpa repellat molestias reiciendis eligendi asperiores consequuntur maxime? Cumque porro ea repudiandae. Deleniti pariatur placeat eveniet enim. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor in ratione sunt facilis! Tenetur veritatis dolore, quis iure delectus amet dolorum? Culpa et est quod repudiandae neque aliquid error ea?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              {/* <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography> */}
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default function Packages(){
  return(
    <>
      {/* <Grid container style={{marginTop: 100}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> */}
      <Grid style={{marginTop: 50}} container alignItems='stretch' spacing={2}>
        {
          arr.map((i, item) => (
            // <Grid item xs={2} sm={4} md={4} key={i}>
            <Grid item xs={12} sm={6} md={6} lg={4} style={{marginTop: 50}}>
              <Package />
            </Grid>
          ))
        }
      </Grid>
    </>
  );
}