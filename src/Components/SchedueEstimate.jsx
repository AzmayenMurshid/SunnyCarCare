import React from "react"
import { Card, CardContent, TextField, Typography, Grid } from "@mui/material";
import Divider from '@mui/material/Divider';

import './style.css';

export default function ScheduleEstimate() {
    return (
        <>
        
            <Card style={{
                maxWidth: '40vw',
                margin: ' 0 auto',
            }}>
                <CardContent>
                    <div style={{ padding: 10 }}>
                        <Typography
                            style={{
                                textAlign: 'center'
                            }}
                            variant="h4" 
                            component={"div"}>Schedule Estimate</Typography>
                        <Typography
                            style={{
                                textAlign: 'center',
                                margin: 10,
                            }}
                            variant="body1"
                            component={"div"}>Sunny Car Care Rental Vehicle Services Available</Typography>
                    </div>
                    
                    <Divider />
                    <Grid container
                    spacing={0}
                    direction="column"
                    justifyContent={"space-evenly"}
                    style={{ marginTop: 20 }}>
                        <TextField style={{margin: 10}} id="name" label="name" variant="outlined" />
                        <TextField style={{margin: 10}} id="phone" label="phone" variant="outlined" />
                        <TextField style={{margin: 10}} id="e-mail" label="e-mail" variant="outlined" />
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}