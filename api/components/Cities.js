import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getCitiesColombiaInfo } from "../Services";
import { ScrollView } from "react-native";

const Cities = ({ navigation }) => {
  const [citiesColombia, setCitiesColombia] = useState([]);

  useEffect(() => {
    async function FetchDataCitiesColombiaInfo() {
      const dataCitiesColombia = await getCitiesColombiaInfo();
      setCitiesColombia(dataCitiesColombia);
    }
    FetchDataCitiesColombiaInfo();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Ciudades colombia</Text>
        {citiesColombia.map((cities) => (
          <Text key={cities.id} style={styles.text}>
           {`id: ${cities.id} Ciudades: ${cities.name}`}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default Cities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
    color: "#333",
    textTransform: "uppercase",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    color: "#555",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
