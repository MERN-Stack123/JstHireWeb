import { Grid, Typography, createTheme, ThemeProvider, Stack } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import React from 'react'
import { footerCustomStyle } from '../../customstyle/footerCustomStyle';

const theme = createTheme({
    typography:{
        fontFamily:['Fredoka', 'sans-serif',].join(','),
        
    }
});



const Footer = () => {
  return (
    <Grid container sx={footerCustomStyle.sxContainer} >
        {/* container warapp */}
        <ThemeProvider theme={theme}>
            <Grid item sx={footerCustomStyle.sxItem} flexDirection={'row'}>
                {/* left side grid */}
                <Stack direction={'row'} sx={footerCustomStyle.sxStack}>
                    <Typography sx={footerCustomStyle.sxTypography} variant='h6'>Any questions?</Typography>
                    <Typography sx={footerCustomStyle.sxSpan} variant='h6'>{" "} Call us now</Typography>
                    <PhoneIcon sx={footerCustomStyle.sxIcon}/>
                </Stack>
            </Grid>

            <Grid item sx={footerCustomStyle.sxItem}>
                {/* right side grid */}
                <Typography sx={footerCustomStyle.sxTypography} variant='h6'>Copyright @jsthire 2023 | Privacy Policy</Typography>
            </Grid>
        </ThemeProvider>
    </Grid>
  )
}

export default Footer