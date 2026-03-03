import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [ocorrencia, setOcorrencia] = useState("");
  const [pin, setPin] = useState("");
  const [pesoCromo, setPesoCromo] = useState("");
  const [pesoNiquel, setPesoNiquel] = useState("");
  const [totalMetais, setTotalMetais] = useState(0);

  function calculaMetais() {
    const Cromo = parseFloat(pesoCromo.replace(",", ".")) || 0;
    const Niquel = parseFloat(pesoNiquel.replace(",", ".")) || 0;

    const total = Cromo + Niquel;
    setTotalMetais(total);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tech Alloy - Controle de Produção</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a ocorrência aqui"
        value={ocorrencia}
        onChangeText={setOcorrencia}
      />

      <Text>PIN de segurança</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu pin"
        value={pin}
        onChangeText={setPin}
        secureTextEntry={true}
      />

      <Button title="ENVIAR OCORRÊNCIA" color="#ff4444" />

      <Text style={styles.subtitulo}>Relatório de Ocorrências</Text>

      <Text>Carga de Cromo (Kg)</Text>
      <TextInput
        style={styles.input}
        placeholder="0,00"
        value={pesoCromo}
        onChangeText={setPesoCromo}
        keyboardType="numeric"
      />

      <Text>Carga de Níquel (Kg)</Text>
      <TextInput
        style={styles.input}
        placeholder="0,00"
        value={pesoNiquel}
        onChangeText={setPesoNiquel}
        keyboardType="numeric"
      />

      <Button
        title="CALCULAR TOTAL DE METAIS"
        color="#4444ff"
        onPress={calculaMetais}
      />

      <Text style={styles.resultado}>
        Peso Total de Carga: {totalMetais.toFixed(2)} Kg
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
