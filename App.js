import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';

import Courses from './Pages/education/courses';
import FrontEnd from './Pages/education/Frameworks/Front_end/frontEnd';
import BackEnd from './Pages/education/Frameworks/Back_end/backEnd';
import FullStack from './Pages/education/Frameworks/FullStack/fullStack';

import Jobs from './Pages/career/jobs';

import Login from './Pages/login';
import Subscribe from './Pages/subscribe/user/subscribe';
import Subscribe2 from './Pages/subscribe/user/subscribe2';
import Subscribe3 from './Pages/subscribe/user/subscribe3';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Subscribe" component={Subscribe} options={{headerShown: false}}/>
        <Stack.Screen name="Subscribe2" component={Subscribe2} options={{ headerShown: false }} />
        <Stack.Screen name="Subscribe3" component={Subscribe3} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Courses" component={Courses} options={{ headerShown: false }} />
        <Stack.Screen name="FrontEnd" component={FrontEnd} options={{ headerShown: false }} />
        <Stack.Screen name="BackEnd" component={BackEnd} options={{ headerShown: false }} />
        <Stack.Screen name="FullStack" component={FullStack} options={{ headerShown: false }} />
        <Stack.Screen name="Jobs" component={Jobs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>             
  );
}

