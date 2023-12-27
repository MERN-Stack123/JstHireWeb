export const otpCustomStyle = {
    sxContainer:{
        height:"full",
        bgcolor:"white",
        justifyContent:"center",
        alignItems:"center",
        columnSpacing: {sx: 1, sm: 3, md: 4 },
        paddingX:8,
        paddingBottom:4,
        maxWidth:"full",
    },
    sxTypographyh1:{
        variant:"h1",
        fontWeight:500,
        fontSize:48,
        py:2,
        typography:{ 
            sm: "h5", 
            xs: "h4", 
            lg: "h3" 
        }
    },
    sxTypographyh3:{
        variant:"h3", 
        fontSize:18, 
        fontWeight:400, 
        pb:6,
        color:'#7A7A7A',
    },
    sxMenuIcon:{
        input: {
            color: "#14C38E", 
            fontSize: 18, 
            padding: 1.5 
        },
        label: {
            fontSize: 15,
            fontWeight: 400,
            color: "black",
            padding: 1.5,
        },
        maxWidth: 539,
        borderRadius: 2,
    },
    sxButton:{
        variant:"contained",
        color: "#FFFFFF",
        bgcolor: "#14C38E",
        "&:hover": { 
            backgroundColor: "#00FFAB" 
        },
        textTransform: "capitalize",
        mb: 2,
        size:"large"
    },
    sxError:{
        color: "red",
        fontSize: 13,
    },
};