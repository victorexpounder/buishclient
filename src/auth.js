import axios from "axios";
import jwt from 'jsonwebtoken'
import { useDispatch } from "react-redux";
import { loginFailure, loginLoading, loginSuccess } from "./Redux/userSlice";



export const auth = async(values)=>{
        console.log(values)
        const formData = new URLSearchParams();
        for (const key in values) {
          formData.append(key, values[key]);
        }
        const res = await axios.post("https://buish.onrender.com/auth/token", formData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        const {access_token} = res.data
        const decoded = jwt.decode(access_token, { complete: true });
        const {sub, ...others} = decoded.payload
        const details = {...others, email: sub, access_token}
        console.log(details)
        return details
}

export const signup = async(values)=>{
        console.log(values)
        const res = await axios.post("https://buish.onrender.com/auth/create_user", values)
        
        console.log(res.data)
}
