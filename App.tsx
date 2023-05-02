import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { RegisterScreen } from "./screens/RegisterScreen/RegisterScreen";
import PlantsScreen from "./screens/PlantsScreen/PlantsScreen";
import PlantScreen from "./screens/PlantScreen/PlantScreen";

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="plants" component={PlantsScreen} />
        <Stack.Screen name="plant" component={PlantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
