import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { getColombiaInfo } from "../Services";

const MainPage = () => {
  const [colombiaInfo, setColombiaInfo] = useState({});

  useEffect(() => {
    async function FetchDataColombiaInfo() {
      const dataColombia = await getColombiaInfo();
      setColombiaInfo(dataColombia);
    }
    FetchDataColombiaInfo();
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>
          Acerca de:{colombiaInfo.name}
        </Text>
        <Text style={styles.text}>Regiones:{colombiaInfo.name}</Text>
        <Text style={styles.text}>Descripción:{colombiaInfo.description}</Text>
        <Text style={styles.text}>Capital:{colombiaInfo.stateCapital}</Text>
        <Text style={styles.text}>Superficie:{colombiaInfo.surface}</Text>
        <Text style={styles.text}>Población:{colombiaInfo.population}</Text>
      </View>
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    margin: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    borderRadius: 30,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center",
  },
});
