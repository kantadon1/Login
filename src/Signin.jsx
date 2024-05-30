import { Box, Typography, useTheme, Button, IconButton } from "@mui/material";
import React from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import HttpsIcon from '@mui/icons-material/Https';

function Signin() {
    return (
        <Box className="whole"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "#7CB9E8",
                margin: "none",
                padding:"none"
            }}
        >
            <Box className="sign"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "30%",
                    height: "80%",
                    border: "1px solid gray",
                    borderRadius: "15px",
                    backgroundColor: "white"
                }}
            >
                <Box className="Log"
                    sx={{
                        marginTop: "40px"
                    }}>

                    <Typography sx={{ fontFamily: "Poetsen One", fontSize: "30px" }}>Login</Typography>
                </Box>

                <Box className="input"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px"
                    }}
                >

                    <Box className="Username"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                            marginTop: "10px"
                        }}
                    >

                        <Typography sx={{ fontFamily: "Montserrat", fontSize: "13px" }}>Username</Typography>
                        <Box className="text" sx={{
                            display: "flex",
                            flexDirection: "row",
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            borderRadius: "4px"
                        }}>
                            <PersonIcon style={{ width: "25px", height: "25px" }} sx={{ paddingTop: "5px" }}></PersonIcon>
                            <input style={{
                                width: "300px",
                                height: "30px",
                                fontSize: "17px",
                                borderRadius: "10px",
                                border: "none",
                                outline: "none"
                            }}></input>
                        </Box>
                    </Box>


                    <Box className="Username"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                            marginTop: "10px"
                        }}
                    >

                        <Typography sx={{ fontFamily: "Montserrat", fontSize: "13px" }}>Password</Typography>
                        <Box className="text" sx={{
                            display: "flex",
                            flexDirection: "row",
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            borderRadius: "4px"
                        }}>
                            <HttpsIcon style={{ width: "25px", height: "25px" }} sx={{ paddingTop: "5px" }}></HttpsIcon>
                            <input style={{
                                width: "300px",
                                height: "30px",
                                fontSize: "17px",
                                borderRadius: "10px",
                                border: "none",
                                outline: "none"
                            }}></input>
                        </Box>
                        <Typography sx={{ fontFamily: "Montserrat", fontSize: "12px", marginLeft: "197px" }}>Forgot Password?</Typography>
                    </Box>



                </Box>

                <Button className="Login" sx={{
                    width: "325px",
                    height: "40px",
                    borderRadius: "25px",
                    background: "radial-gradient(circle, rgba(160,198,213,1) 0%, rgba(78,118,143,1) 35%, rgba(4,46,61,1) 100%)",
                    marginTop: "40px"
                }} >

                    <Typography sx={{ fontFamily: "Poetsen One", fontSize: "20px", color: "white" }}>Login</Typography>

                </Button>

                <Box className="singupoption"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "10%"
                    }}
                >

                    <Typography sx={{ fontFamily: "Montserrat", fontSize: "15px", color: "black", paddingLeft: "17px" }}>Or Signup Using</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap:"15px"
                        }}
                    >

                        <IconButton><FacebookRoundedIcon sx={{ color: "blue" }}></FacebookRoundedIcon></IconButton>
                        <IconButton>
                            <TwitterIcon sx = {{color: "#1DA1F2"}}></TwitterIcon>
                        </IconButton>

                        <IconButton>
                            <GoogleIcon  sx = {{color: "#DB4437"}}></GoogleIcon>
                        </IconButton>
                    </Box>


                </Box>


                <Box sx = {{display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems:"center",
                    marginTop: "23%"
                }}>
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "15px", color: "black" }}>Or Signup Using</Typography>
                <Link to = {"/signup"}> <Typography sx={{ fontFamily: "Montserrat", fontSize: "15px", color: "black" }} >Signup </Typography></Link>
                </Box>
            </Box>
        </Box>
    )
}
export default Signin;