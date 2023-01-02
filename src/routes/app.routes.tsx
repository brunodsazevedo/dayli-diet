import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { NewSnack } from '@screens/NewSnack';
import { SnackFeedback } from '@screens/SnackFeedback';
import { DetailSnack } from '@screens/DetailSnack';
import { EditSnack } from '@screens/EditSnack';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="new"
        component={NewSnack}
      />

      <Screen
        name="feedback"
        component={SnackFeedback}
      />

      <Screen
        name="detail"
        component={DetailSnack}
      />

      <Screen
        name="edit"
        component={EditSnack}
      />

      <Screen
        name="statistics"
        component={Statistics}
      />
    </Navigator>
  );
}
