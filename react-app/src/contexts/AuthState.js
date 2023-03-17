import { AuthContext } from "./AuthContext";
import React,{useState} from "react";
const AuthState=(props)=>{
    const s1={
        isLoggedIn:false
    }
    const [state,setState]=useState(s1)
    
    return (
        <AuthContext.Provider value={{state,setState}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthState;