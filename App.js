import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigator } from "./src/navigation/auth-navigator";
export default function App() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}> 
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}


