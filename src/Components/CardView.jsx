import { Card, CardActionArea, CardMedia, Grid, Grow, Typography } from "@mui/material";
import React from "react";

export default function CardView(){
    const displays = [
        {title: 'services', url: '/services', image: {}},
        {title: 'contact us', url: '/contact-us', image: {}}, 
        {title: 'get directions', url: '/get-directions', image: {}}, 
        {title: 'daily rentals', url: '/daily-rentals', image: {}},
    ];

    return(
        <div style={{marginTop: 50,}}>
            <Grow in>
                <Grid style={{}} container alignItems='stretch' spacing={3}>
                {
                    displays.map((display, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} style = {{}}>
                               <Card
                                    className='cardview'
                                    key={index}
                                    style={{  
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        borderBottom: '10px solid white', }}>
                                        <CardActionArea href={display.url} target="__blank"> 
                                            <CardMedia 
                                                style = {{height: 250}} 
                                                image="http://www.pixelstalk.net/wp-content/uploads/2016/08/Lamborghini-mountain-fog-sports-car-photos.jpg" title="car" />
                                        </CardActionArea>
                                        <div>
                                            <Typography 
                                                variant="body2" 
                                                component={'p'}
                                                style={{textAlign: 'center', fontSize: 20,}}>
                                                {display.title}
                                            </Typography>
                                        </div>
                                </Card> 
                            </Grid>
                        )
                    )
                }
                </Grid>
            </Grow>
        </div>
    )
}