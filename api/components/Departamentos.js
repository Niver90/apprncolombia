import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { getDepartamentosColombiaInfo } from "../Services";

const Departamentos = ({ navigation }) => {
  const [departamentoscolombiaInfo, setDepartamentosColombiaInfo] = useState(
    []
  );

  useEffect(() => {
    async function FetchDataDepartamentosColombiaInfo() {
      const dataDepartamentosColombia = await getDepartamentosColombiaInfo();
      setDepartamentosColombiaInfo(dataDepartamentosColombia);
    }
    FetchDataDepartamentosColombiaInfo();
  }, []);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.title}>Nombre Departamentos</Text>
        {departamentoscolombiaInfo.map((departamentos) => (
          <Text key={departamentos.id} style={styles.text}>
            Departamentos:{departamentos.name}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default Departamentos;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
