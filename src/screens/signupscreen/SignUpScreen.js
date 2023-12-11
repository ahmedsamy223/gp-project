import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Text, Alert } from "react-native";
import { supabase } from "../../../lib/supabase";
import CustomButton from "../../component/CustomButtom";
import CustomInput from "../../component/customInput/CustomInput";
const SignUpScreen = () => {
  const [email, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfrimPassWord] = useState("");
  const [loading, setLoading] = useState(false);
  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { username, phone_num: PhoneNumber } },
    });
    if (error) console.log(error);
    // if (!session)
    //Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
    console.log("Form submitted successfully!");
  }
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    validateForm();
  }, [email, username, PhoneNumber, password, confirmPassword]);

  const validateForm = () => {
    let errors = {};
    // Validate email field
    const mail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!email) {
      errors.email = "Email is required.";
    } else if (!email.match(mail)) {
      errors.email = "Please enter a valid email.";
    }
    // Validate name field
    if (!username) {
      errors.username = "Username is required.";
    }
    // Validate PhoneNumber field
    const num = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    if (!PhoneNumber) {
      errors.PhoneNumber = "PhoneNumber is required.";
    }
      else if (!PhoneNumber.match(num)) {
      errors.PhoneNumber = "Please enter a valid number.";
    }
    // Validate password field
    const passw = /(?=.*[A-Z])/;
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 7 || !password.match(passw)) {
      errors.password =
        "Password must be at least 7 characters and a capital letter.";
    }

    // Validate password field
    if (!confirmPassword) {
      errors.confirmPassword = "confirmPassword is required.";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = " Password and confirmPassword do not match.";
    }

    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      signUpWithEmail();
      setUserEmail("")
      setUsername("")
      setPhoneNumber("")
      setPassword("")
      setConfrimPassWord("")
    } else {
      // Form is invalid, display error messages
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <ScrollView contentContainerStyle={{paddingBottom:30}} style={{ rowGap: 50, backgroundColor: "white"}}>
      <View style={{ rowGap: 30 }} className="flex-1 pt-5 px-6">
        <CustomInput
          placeholder={"Email"}
          value={email}
          setValue={setUserEmail}
          error={errors.email}
        />
        <CustomInput
          placeholder={"Username"}
          value={username}
          setValue={setUsername}
          error={errors.username}
        />
        <CustomInput
          placeholder={"Phone number"}
          value={PhoneNumber}
          setValue={setPhoneNumber}
          error={errors.PhoneNumber}
        />
        <CustomInput
          placeholder={"Password"}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          error={errors.password}
        />
        <CustomInput
          placeholder={"Confirm Password"}
          value={confirmPassword}
          setValue={setConfrimPassWord}
          secureTextEntry={true}
          error={errors.confirmPassword}
        />
        <CustomButton text={"Sign Up"} onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 20,
    marginBottom: 12,
  },
});
export default SignUpScreen;
