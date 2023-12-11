import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Alert, StyleSheet } from "react-native";
import { supabase } from "../../../lib/supabase";
import CustomButton from "../../component/CustomButtom";
import CustomInput from "../../component/customInput/CustomInput";

const SignInScreen = () => {
  const navigation = useNavigation();

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    else {
      navigation.navigate("Vieww");
    }
    setLoading(false);
  }

  const onForgetPassPressed = () => {
    navigation.navigate("Reset your password");
  };
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    validateForm();
  }, [email, password]);

  const validateForm = () => {
    let errors = {};

    // Validate Email field
    if (!email) {
      errors.email = "Email is required.";
    }

    // Validate password field
    var passw = /(?=.*[A-Z])/;
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 7 || !password.match(passw)) {
      errors.password =
        "Password must be at least 7 characters and a capital letter.";
    }

    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      signInWithEmail();
      setEmail("");

      // Form is valid, perform the submission logic
      console.log("Form submitted successfully!");
    } else {
      // Form is invalid, display error messages
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <View
      style={{ rowGap: 50, backgroundColor: "white" }}
      className="flex-1 pt-5 px-6"
    >
      <View style={{ rowGap: 20 }}>
        <CustomInput placeholder={"Email"} value={email} setValue={setEmail} />

        <CustomInput
          placeholder={"Password"}
          value={password}
          setValue={setPass}
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={onForgetPassPressed}>
          <Text className="text-blue-600  ">Forget Password ?</Text>
        </TouchableOpacity>
      </View>

      <CustomButton text={"Sign In"} onPress={handleSubmit} />
      <View>
        {Object.values(errors).map((error, index) => (
          <Text key={index} style={styles.error}>
            {error}
          </Text>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 20,
    marginBottom: 12,
  },
});

export default SignInScreen;
