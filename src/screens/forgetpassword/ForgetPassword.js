import { View, Text,StyleSheet } from 'react-native'
import CustomInput from '../../component/customInput/CustomInput';
import CustomButton from '../../component/CustomButtom';
import { useState,useEffect } from 'react';
import React from 'react'

const ForgetPassword = () => {
    const onResetPasPressed=()=>{
        console.log('hi')
    }
    const [password,setText] = useState('');
    const [rePassword,setPass] = useState('');
    const [errors, setErrors] = useState({}); 
    const [isFormValid, setIsFormValid] = useState(false); 
    useEffect(() => { 
  

      validateForm(); 
  }, [rePassword, password]); 

  const validateForm = () => { 
      let errors = {}; 

      // Validate name field 
      if (!password) { 
          errors.password = 'password is required.'; 
      } 

      // Validate password field 
      var passw=  /(?=.*[A-Z])/
      if (!password) { 
          errors.password = 'Password is required.'; 
      } else if (password.length<7||!password.match(passw)) { 
          errors.password = 'Password must be at least 7 characters and a capital letter.'; 
      } 
      if (!password) { 
        errors.password = 'password is required.'; 
    } 

    // Validate password field 
    if (!rePassword) { 
        errors.rePassword = 'rePassword is required.'; 
    } else if (password!==rePassword) { 
        errors.rePassword = 'New password and rePassword do not match.'; 
    } 

      // Set the errors and update form validity 
      setErrors(errors); 
      setIsFormValid(Object.keys(errors).length === 0); 
  }; 

  const handleSubmit = () => { 
      if (isFormValid) { 

          // Form is valid, perform the submission logic 
          console.log('Form submitted successfully!'); 
      } else { 
            
          // Form is invalid, display error messages 
          console.log('Form has errors. Please correct them.'); 
      } 
  }; 
  return (
    <View style={{ rowGap: 20 }} className="flex-1 pt-10 px-4 bg-white">
      <CustomInput placeholder={"Phone number / Username"}/>
    <CustomInput placeholder={'New Password'} value={password} setValue={setText} secureTextEntry={true} error={errors.password}/>
    <CustomInput placeholder={'Re-enter the new password'} value={rePassword} setValue={setPass} secureTextEntry={true} error={errors.rePassword}/>
    <CustomButton text={'Reset password'} onPress={handleSubmit}/>
    </View>
  )
}

export default ForgetPassword