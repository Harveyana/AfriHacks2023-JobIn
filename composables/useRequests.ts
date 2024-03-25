import type { LocationQueryValue } from '#vue-router';
import axios from 'axios';

export const useRequests = () => {

    const getResume = async (description:string) => {
      const response = await axios.post('http://joblin-001-site1.atempurl.com/api/ChatGpt/Cover_letter', {
        content: description,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response Data:', response.data);
      return response.data;
    };



    const AccountRecovery = async(email:string,)=>{

      const response = await axios.post('http://localhost:5000/api/account/recover', {
        email: email,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response Data:', response.data);
      if(response.status = 200){
        return true
      }else{
        return false
      }
      // return response.data;

    }


    const ResetPassword = async(newpassword:string|number,code:string|LocationQueryValue[])=>{

      const response = await axios.post('http://localhost:5000/api/account/resetpassword', {
        newpassword: newpassword,
        code:code
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response Data:', response.data);
      if(response.status = 200){
        return true
      }else{
        return false
      }

    }

    const sendVerification = async(email:string)=>{

      const response = await axios.post('http://localhost:5000/api/account/sendVerification', {
        email: email
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response Data:', response.data);
      if(response.status = 200){
        return true
      }else{
        return false
      }

    }


    const verify = async(code:string|LocationQueryValue[])=>{

      const response = await axios.post('http://localhost:5000/api/account/verifyEmail', {
        code: code
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response Data:', response.data);
      if(response.status = 200){
        return true
      }else{
        return false
      }

    }


    const welcome = async(email:string,username:string)=>{

      const response = await axios.post('http://localhost:5000/api/account/welcome', {
        email: email,
        userName: username
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response Data:', response.data);
      if(response.status = 200){
        return true
      }else{
        return false
      }

    }


    const parse = async(details:string)=>{

      const response = await axios.post('http://localhost:5000/api/generate/parse', {
        userDetails: `${details}`
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response Data:', response.data);
      if(response.status = 200){
        return response.data
      }else{
        return false
      }

    }
    
    return {
      ResetPassword,
      AccountRecovery,
      sendVerification,
      welcome,
      verify,
      parse
    }

}