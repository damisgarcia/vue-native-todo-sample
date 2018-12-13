import { StackNavigator } from "vue-native-router";

import HomeScreen from "../components/HomeScreen";
import CounterScreen from "../components/CounterScreen";
import TodosScreen from "../components/TodosScreen";

export default AppNavigation = StackNavigator(
    {
        Home: HomeScreen,
        Counter: {
            screen: CounterScreen,
            navigationOptions: {
                title: 'Counter Screen'
            }
        },
        Todos: {
            screen: TodosScreen,
            navigationOptions: {
                title: 'Todos Screen'
            }
        }
    },
    {
        initialRouteName: 'Home',
    }
);