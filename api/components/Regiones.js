import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getRegionesColombiaInfo } from "../Services";


const Regiones = ({ navigation }) => {
  const [regionescolombiaInfo, setRegionesColombiaInfo] = useState([]);


  useEffect(() => {
    async function FetchDataRegionesColombiaInfo() {
      const dataRegionesColombia = await getRegionesColombiaInfo();
      setRegionesColombiaInfo(dataRegionesColombia);
    }
    FetchDataRegionesColombiaInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regiones colombia</Text>
      {regionescolombiaInfo.map((regiones) => (
        <Text key={regiones.id} style={styles.text}>Regiones:{regiones.name}</Text>
      ))}
    </View>
  );
};

export default Regiones;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
