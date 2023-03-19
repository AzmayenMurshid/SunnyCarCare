import { Card, TextField, Grid, CardContent, Typography } from "@mui/material"

export default function Login(){
    return(
        <>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>

        <Grid item xs={3}>
            <Card  
                variant = "outlined" 
                style={{
                    padding:20, 
                    minWidth: 300,
                    minHeight: 300,
                    }}>
                <Typography>
                    Login
                </Typography>
                <CardContent>
                    <TextField id="standard-basic" label="Username" variant="standard" />
                </CardContent>
                <CardContent>
                    <TextField id="standard-basic" label="Password" variant="standard" />
                </CardContent>
            </Card>
        </Grid>   

      </Grid> 
    </>
    )
}   