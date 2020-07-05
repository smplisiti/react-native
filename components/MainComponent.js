import React, { Component } from "react";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Home from "./HomeComponent";
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
<<<<<<< HEAD
import { View, Platform, StyleSheet, Text, ScrollView, Image } from "react-native";
import { createStackNavigator, createDrawerNavigator, DrawerItems } from "react-navigation";
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
=======
import { View, Platform, ScrollView } from "react-native";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
>>>>>>> 7c122906987ac3661ecca2110354a106114f6303



const DirectoryNavigator = createStackNavigator(
  {
    Directory: { 
      screen: Directory,
      navigationOptions: ({navigation}) => ({
      headerLeft: <Icon
       name='list' 
       type='font-awesome'
       iconStyle={styles.stackIcon}
       onPress={() => navigation.toggleDrawer()}
       />
      })
     },
    CampsiteInfo: { screen: CampsiteInfo },
  },
  {
    initialRouteName: "Directory",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
<<<<<<< HEAD
      },
=======
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
>>>>>>> 7c122906987ac3661ecca2110354a106114f6303
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
<<<<<<< HEAD
      headerLeft: <Icon
       name='home' 
       type='font-awesome'
       iconStyle={styles.stackIcon}
       onPress={() => navigation.toggleDrawer()}
       />
    }),
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About },
  },
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: <Icon
       name='info-circle' 
       type='font-awesome'
       iconStyle={styles.stackIcon}
       onPress={() => navigation.toggleDrawer()}
       />
    }),
=======
    },
>>>>>>> 7c122906987ac3661ecca2110354a106114f6303
  }
);

const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact },
  },
  {
<<<<<<< HEAD
    navigationOptions: ({navigation}) => ({
=======
    navigationOptions: {
>>>>>>> 7c122906987ac3661ecca2110354a106114f6303
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
<<<<<<< HEAD
      headerLeft: <Icon
       name='address-card' 
       type='font-awesome'
       iconStyle={styles.stackIcon}
       onPress={() => navigation.toggleDrawer()}
       />
    }),
=======
    },
>>>>>>> 7c122906987ac3661ecca2110354a106114f6303
  }
);

const CustomDrawerContentComponent = props => (
  <ScrollView>
      <SafeAreaView 
          style={styles.container}
          forceInset={{top: 'always', horizontal: 'never'}}>
          <View style={styles.drawerHeader}>
              <View style={{flex: 1}}>
                  <Image source={require('./images/logo.png')} style={styles.drawerImage} />
              </View>
              <View style={{flex: 2}}>
                  <Text style={styles.drawerHeaderText}>NuCamp</Text>
              </View>
          </View>
          <DrawerItems {...props} />
      </SafeAreaView>
  </ScrollView>
);



const MainNavigator = createDrawerNavigator(
  {
<<<<<<< HEAD
    Home: { 
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon
              name='home'
              type='font-awesome'
              size={24}
              color={tintColor}
              />
        )
      }
    },
    Directory: { 
      screen: DirectoryNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon
              name='list'
              type='font-awesome'
              size={24}
              color={tintColor}
              />
        )
      }
    },
    About: { 
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: 'About Us',
        drawerIcon: ({tintColor}) => (
          <Icon
              name='info-circle'
              type='font-awesome'
              size={24}
              color={tintColor}
              />
        )
      }
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        drawerLabel: 'Contact Us',
        drawerIcon: ({tintColor}) => (
          <Icon
              name='address-card'
              type='font-awesome'
              size={24}
              color={tintColor}
              />
        )
      }
    },
  },
  {
    drawerBackgroundColor: "#CEC8FF",
    contentComponent: CustomDrawerContentComponent
=======
    Home: { screen: HomeNavigator },
    Directory: { screen: DirectoryNavigator },
    About: { screen: AboutNavigator },
    Contact: {screen: ContactNavigator },
  },
  {
    drawerBackgroundColor: "#CEC8FF",
>>>>>>> 7c122906987ac3661ecca2110354a106114f6303
  }
);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <MainNavigator />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  drawerHeader: {
      backgroundColor: '#5637DD',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
  },
  drawerHeaderText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold'
  },
  drawerImage: {
      margin: 10,
      height: 60,
      width: 60
  },
  stackIcon: {
      marginLeft: 10,
      color: '#fff',
      fontSize: 24
  }
});




export default Main;