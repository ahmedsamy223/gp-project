import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SignInScreen from "../screens/signinScreen/SignInScreen";
import SignUpScreen from "../screens/signupscreen/SignUpScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import ForgetPassword from "../screens/forgetpassword/ForgetPassword";
import { Image, Text, View, useWindowDimensions } from "react-native";
import Logo from "../../assets/logo.png";
import React from "react";
import ViewScreen from "../screens/View";
const Tab = createMaterialTopTabNavigator();
const AuthTabNavigator = () => {
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  return (
    <>
      <View className="items-center justify-center bg-white pb-4">
        <Image
          source={Logo}
          style={{ resizeMode: "contain", height: height * 0.2 }}
        />

        <Text className="text-blue-400  text-2xl font-extrabold ">
          Find your child
        </Text>
        <Text className="text-indigo-500 text-xl font-bold ">
          We will find your child for you :)
        </Text>
      </View>

      <Tab.Navigator screenOptions={{tabBarLabelStyle:{fontWeight:"bold",fontSize:18}}}>
        <Tab.Screen name="Login" component={SignInScreen} />
        <Tab.Screen name="Register" component={SignUpScreen} />
      </Tab.Navigator>
    </>
  );
};
const Stack = createStackNavigator();
export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={AuthTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ViewScreen"
        component={ViewScreen}
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  );
};
