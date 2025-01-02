import axios from "axios"
import { useSelector } from "react-redux";

export const addCourse = async(values, token) =>{
    const res = await axios.post("https://buish.onrender.com/course/create_course", values, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data
    
}
export const getUserCourses = async(values, token) =>{
    const res = await axios.get("https://buish.onrender.com/course/create_course", values, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data
    
}