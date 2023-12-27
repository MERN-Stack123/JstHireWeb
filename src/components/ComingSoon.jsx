import React from 'react'
import { Button, Grid, TextField, Typography, createTheme, ThemeProvider, InputAdornment} from "@mui/material";
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import { CardContent, CardMedia } from '@mui/material';
import img from '../assets/images/Hiring.gif';

const ComingSoon = () => {
  return (
    <Grid
          container
          height={"full"}
          bgcolor={'#FFFFFF'}
          justifyContent="center"
          alignItems="center"
          columnSpacing={{ sx:1, sm:3, md:4}}
          paddingX={8}
          paddingBottom={4}
          
        >
    <Grid item xs={12} sm={12} md={6} lg={6} textAlign='center'alignItems='center'>
        <h1>Coming Soon..!</h1>
    </Grid>
    <Grid item xs={12}  sm={12} md={6} lg={6} justifyContent='center' alignItems='center' >
    {/* right side */}
    <CardContent>
        <CardMedia
          component="img"
          alt="im_error"
          height="full"
          width="full"
          src={img}
          title="Image Title"
        />
      </CardContent>

  </Grid>
  </Grid>
  )
}

export default ComingSoon
