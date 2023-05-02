import React from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Regiones from "./Regiones";
import MainPage from "./MainPage";
import Departamentos from "./Departamentos";
import Cities from "./Cities";

const NavigationTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Main") {
            iconName = focused ? "earth" : "earth-outline";
            size = focused ? size + 8 : size + 5;
          }
          if (route.name === "Departamentos") {
            iconName = focused ? "create" : "create-outline";
            size = focused ? size + 8 : size + 5;
          } 
          if (route.name === "Ciudades") {
            iconName = focused ? "book" : "book-outline";
            size = focused ? size + 8 : size + 5;
          }
          else if (route.name === "Regiones") {
            iconName = focused ? "ios-list" : "ios-list-outline";
            size = focused ? size + 8 : size + 5;
          }
          return <Ionic name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#8f8f8a",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        style: {
          backgroundColor: "#8f8f8a",
          heigth: 60,
        },
      })}
    >
      <Tab.Screen
        name="Main"
        component={MainPage}
        options={{
          title: "Información Colombia",
          headerStyle: {
            backgroundColor: "#8f8f8a",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            flex: 1,
            fontWeight: "bold",
            marginLeft: 50,
            fontSize: 25,
            alignContent: "center",
            justifyContent: "center",
          },
        }}
      />
      <Tab.Screen
        name="Regiones"
        component={Regiones}
        options={{
          title: "REGIONES",
          headerStyle: {
            backgroundColor: "#8f8f8a",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            flex: 1,
            fontWeight: "bold",
            marginLeft: 120,
            fontSize: 30,
            alignContent: "center",
            justifyContent: "center",
          },
        }}
      />
      <Tab.Screen
        name="Departamentos"
        component={Departamentos}
        options={{
          title: "DEPARTAMENTOS",
          headerStyle: {
            backgroundColor: "#8f8f8a",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            flex: 1,
            fontWeight: "bold",
            marginLeft: 55,
            fontSize: 30,
            alignContent: "center",
            justifyContent: "center",
          },
        }}
      />
       <Tab.Screen
        name="Ciudades"
        component={Cities}
        options={{
          title: "CIUDADES",
          headerStyle: {
            backgroundColor: "#8f8f8a",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            flex: 1,
            fontWeight: "bold",
            marginLeft: 120,
            fontSize: 30,
            alignContent: "center",
            justifyContent: "center",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
