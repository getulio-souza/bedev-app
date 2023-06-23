import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Courses from './Pages/courses';
import Jobs from './Pages/jobs';
import Login from './Pages/login';
import Subscribe from './Pages/subscribe/user/subscribe';
import Subscribe2 from './Pages/subscribe/user/subscribe2';
import Subscribe3 from './Pages/subscribe/user/subscribe3';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Subscribe">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Courses" component={Courses} options={{headerShown:false}}  />
        <Stack.Screen name="Jobs" component={Jobs} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Subscribe" component={Subscribe} options={{headerShown: false}}/>
        <Stack.Screen name="Subscribe2" component={Subscribe2} options={{ headerShown: false }} />
        <Stack.Screen name="Subscribe3" component={Subscribe3} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>             
  );
}

