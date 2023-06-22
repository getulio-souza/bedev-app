import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Courses from './Pages/courses';
import Jobs from './Pages/jobs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Courses" component={Courses} options={{headerShown:false}}  />
        <Stack.Screen name="Jobs" component={Jobs} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>             
  );
}

