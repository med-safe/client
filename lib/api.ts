import axios from "axios";
axios.defaults.baseURL="http://localhost:3000"

const signupCitizen = async(data:{name:string,aadhar:string,password:string})=>{
    try{
        const response = await axios.post("/register",data);
        console.log('first', response.data) 
        return response;
    }catch(err){
        return err
    }
}

const loginCitizen = async(data:{aadhar:string,password:string})=>{
    try{
        const response = await axios.post("/auth/citizen",data);
        return response;
    }catch(err){
        return err
    }
}

const signupOrg = async(data:{name:string,email:string,address:string,password:string})=>{
    try{
        const response = await axios.post("/register/org",data);
        console.log('first', response.data) 
        return response;
    }catch(err){
        return err
    }
}

const loginOrg = async(data:{email:string,password:string})=>{
    try{
        const response = await axios.post("/auth/org",data);
        return response;
    }catch(err){
        return err
    }
}


const request = async(token:string)=>{
    try{
        const response = await axios.get('/request/citizen',{headers:{Authorization:`Bearer ${token}`}})
        return response;
    }catch(err){
        return err
    }
    
}


const orgRequest = async(token:string,aadhar:string)=>{
    try {
        const response = await axios.post("/request",{aadhar},{headers:{Authorization:`Bearer ${token}`}})
        return response;
    } catch (error) {
        return error
    }
}

const acceptDecline = async(reqid:string, action:string,token:string)=>{
    try {
        const response = await axios.post(`/request/${reqid}/act?action=${action}`,{},{headers:{Authorization:`Bearer ${token}`}})
        return response;
    } catch (error) {
        console.log(error);
        
        
    }
}

const benefactorAll = async(token:string)=>{
    try{
        const response = await axios.get('/benefactor/all',{headers:{Authorization:`Bearer ${token}`}})
        return response;
    }catch(err){
        return err
    }
}
const orgDetails = async(token:string)=>{
    try{
        const response = await axios.get('/org',{headers:{Authorization:`Bearer ${token}`}})
        return response;
    }catch(err){
        return err
    }
}
const pendingRequest = async(token:string)=>{
    try{
        const response = await axios.get('/request/org',{headers:{Authorization:`Bearer ${token}`}})
        return response;
    }catch(err){
        return err
    }
}

const ownRecords = async(token:string)=>{
    try{
        const response = await axios.get('/record',{headers:{Authorization:`Bearer ${token}`}})
        return response;
    }catch(err){
        return err
    }
}



export {signupCitizen,loginCitizen,signupOrg,loginOrg,request,orgRequest,acceptDecline,benefactorAll,orgDetails,pendingRequest,ownRecords}