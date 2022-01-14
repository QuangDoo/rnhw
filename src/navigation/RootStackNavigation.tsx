import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '~/screen/HomeScreen';

const Stack = createNativeStackNavigator();

const RootStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: true}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;
