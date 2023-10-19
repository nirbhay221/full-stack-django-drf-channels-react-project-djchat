import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import { useAuthServiceContext } from "../context/AuthContext";
import { Container ,Box, Typography, TextField, Button} from "@mui/material";


const Login = () => {
    const {login} = useAuthServiceContext();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues:{
            username: "",
            password : "",
        },
        validate : (values)=>{
            const errors: Partial<typeof values> ={};
            if(!values.username){
                errors.username = "Username Required"
            }
            if(!values.password){
                errors.password = "Password Required"
            }
            return errors
        }
        ,
        onSubmit: async ( values) =>{
            const {username,password} = values;
            const res = await login(username,password);
            console.log(res)
            if(res === 401){
                console.log("Unauthorized")
                formik.setErrors({
                    username : "Invalid Username or Password",
                    password : "Invalid Username or Password",
                })
            }
            else{
                navigate("/")
            }
    
        },
    });
    return (
        <Container component  = "main" maxWidth = "xs">
            <Box sx ={{marginTop : 8,display : "flex",alignItems: "center", flexDirection:"column",  }}>
            <Typography variant = "h5" noWrap component = "h1" sx ={{fontWeight:500 , pb: 2,}} >
                Sign In
            </Typography>
            <Box component="form" onSubmit = {formik.handleSubmit} sx = {{mt : 1}}>
                
                <TextField 
                autoFocus
                fullWidth
                id = "username" 
                name = "username"
                label = "username" 
                value = {formik.values.username} 
                onChange={formik.handleChange}
                error = {!!formik.touched.username && !!formik.errors.username}
                helperText = {formik.touched.username && formik.errors.username}>
                </TextField>
                
                
                <TextField 
                fullWidth
                margin = "normal"
                id = "password" 
                name = "password" 
                type = "password"
                label = "password"
                value = {formik.values.password} 
                onChange={formik.handleChange}
                error = {!!formik.touched.password && !!formik.errors.password}
                helperText = {formik.touched.password && formik.errors.password}>
                    
                </TextField>
                <Button variant = "contained" disableElevation type = "submit" sx = {{mt : 1 ,mb: 1,alignContent: "center"}}> Next </Button>
            </Box>
            
            </Box>
            
        </Container>
        // <div>
        //     <h1>Login</h1>
            
        // </div>
    )
}


export default Login;