import React from "react";
import { Typography } from "@mui/material";


import './style.css'

export default function Footer(){
    return(<>
        <div className="footer">
            <div className="container">
                <div className="row">
                <Typography className='footer__text' variant='body1'>Address: 5 Avenue Anatole France, 75007 Paris  </Typography>
                <Typography className='footer__text' variant='body1'>E-mail: hassan.ali@gmail.com</Typography>
                <Typography className='footer__text' variant='body1'>Phone: +33 6 00 00 00 00</Typography>
                </div>
            </div>
        </div>
    </>)
}