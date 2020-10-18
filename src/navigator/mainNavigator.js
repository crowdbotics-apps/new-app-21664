import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps147881Navigator from '../features/Maps147881/navigator';
import Add-Item147880Navigator from '../features/Add-Item147880/navigator';
import Maps147876Navigator from '../features/Maps147876/navigator';
import UserProfile147872Navigator from '../features/UserProfile147872/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps147881: { screen: Maps147881Navigator },
Add-Item147880: { screen: Add-Item147880Navigator },
Maps147876: { screen: Maps147876Navigator },
UserProfile147872: { screen: UserProfile147872Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
