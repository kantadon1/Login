import { Box, Typography, useTheme, Button, IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import React, { useState } from "react";


function Signup() {

      const [formData,setFormData] = useState({
        username: "",
        password: "",
        email: "",
        phoneNumber: "",
      });

      const [passwordError, setpasswordError] = useState();
       
      const validPassword = (value) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        const isValid = passwordRegex.test(value);

        setpasswordError(isValid ? '' : 'Invalid password')
       }

      const handleChange = (event) => {
        const{name, value} = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        })
    )
    if (name === "password"){
        validPassword(value);
    }
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!passwordError){
        console.log("Form submitted", formData);
        }
    }


    return (
        <Box className="whole"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "#7CB9E8",
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

                    <Typography sx={{ fontFamily: "Poetsen One", fontSize: "30px" }}>Signup</Typography>
                </Box>

                <form onSubmit = {handleSubmit}>
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

                        <Typography sx={{ fontFamily: "Montserrat", fontSize: "13px" }}>Gmail</Typography>
                        <Box className="text" sx={{
                            display: "flex",
                            flexDirection: "row",
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            borderRadius: "4px"
                        }}>
                            <input 
                            type = "email"
                            name = "email"
                            value = {formData.email}
                            onChange={handleChange}
            
                            
                            
                            
                            style={{
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

                        <Typography sx={{ fontFamily: "Montserrat", fontSize: "13px" }}>Username</Typography>
                        <Box className="text" sx={{
                            display: "flex",
                            flexDirection: "row",
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            borderRadius: "4px"
                        }}>
                            <input 
                             type = "text"
                             name = "username"
                             value = {formData.username}
                             onChange={handleChange}
                            style={{
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

                        <Typography sx={{ fontFamily: "Montserrat", fontSize: "13px" }}>PhoneNumber</Typography>
                        <Box className="text" sx={{
                            display: "flex",
                            flexDirection: "row",
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            borderRadius: "4px"
                        }}>
                            <input 
                             type = "text"
                             name = "phoneNumber"
                             value = {formData.phoneNumber}
                             onChange={handleChange}
                            
                            style={{
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
                            <input 
                             type = "password"
                             name = "password"
                             value = {formData.password}
                             onChange={handleChange}
                            
                            
                            style={{
                                width: "300px",
                                height: "30px",
                                fontSize: "17px",
                                borderRadius: "10px",
                                border: "none",
                                outline: "none"
                            }}></input>
                        </Box>
                        {passwordError && <span style={{ color: "red" }}>{passwordError}</span>}
                    </Box>

                    <Link to={"/"}>
                    <Button type= "submit" className="Login" disabled = {!!passwordError} sx={{
                        width: "325px",
                        height: "40px",
                        borderRadius: "25px",
                        background: "radial-gradient(circle, rgba(160,198,213,1) 0%, rgba(78,118,143,1) 35%, rgba(4,46,61,1) 100%)",
                        marginTop: "33px"
                    }} >

                        <Typography sx={{ fontFamily: "Poetsen One", fontSize: "20px", color: "white" }}>Create Account</Typography>
                    </Button>
                    </Link>



                </Box>

                </form>

                <Box className="singupoption"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "10%"
                        }}
                    >

                        <Typography sx={{ fontFamily: "Montserrat", fontSize: "15px", color: "black", paddingLeft: "25px" }}>Or Signup Using</Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "30px",
                                marginTop: "15px"
                            }}
                        >

                            <IconButton><FacebookRoundedIcon sx={{ color: "blue" }}></FacebookRoundedIcon></IconButton>
                            <IconButton>
                                <TwitterIcon sx={{ color: "#1DA1F2" }}></TwitterIcon>
                            </IconButton>

                            <IconButton>
                                <GoogleIcon sx={{ color: "#DB4437" }}></GoogleIcon>
                            </IconButton>
                        </Box>


                    </Box>

            </Box>


        </Box>
    )

}

export default Signup;