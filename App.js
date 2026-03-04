import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
} from "react-native";

export default function App() {
  const [ocorrencia, setOcorrencia] = useState("");
  const [pin, setPin] = useState("");
  const [pesoCromo, setPesoCromo] = useState("");
  const [pesoNiquel, setPesoNiquel] = useState("");
  const [totalMetais, setTotalMetais] = useState(0);

  function mostrarAlerta(titulo, mensagem) {
    if (Platform.OS === "web") {
      alert(`${titulo}\n\n${mensagem}`);
    } else {
      Alert.alert(titulo, mensagem);
    }
  }

  function enviarOcorrencia() {
    if (!ocorrencia.trim()) {
      mostrarAlerta("Erro", "Descreva a ocorrência antes de enviar.");
      return;
    }

    if (pin !== "1234") {
      mostrarAlerta("PIN inválido", "PIN de segurança incorreto.");
      return;
    }

    mostrarAlerta(
      "Ocorrência registrada",
      "Sua ocorrência foi enviada com sucesso."
    );

    setOcorrencia("");
    setPin("");
  }

  function calcularMetais() {
    const cromo = parseFloat(pesoCromo.replace(",", ".")) || 0;
    const niquel = parseFloat(pesoNiquel.replace(",", ".")) || 0;

    const total = cromo + niquel;
    setTotalMetais(total);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.logo}>TECH ALLOY</Text>
      <Text style={styles.subtitulo}>Controle de Produção</Text>

      <View style={styles.card}>
        <Text style={styles.tituloSecao}>Registrar Ocorrência</Text>

        <TextInput
          style={styles.input}
          placeholder="Descreva a ocorrência..."
          placeholderTextColor="#999"
          value={ocorrencia}
          onChangeText={setOcorrencia}
        />

        <TextInput
          style={styles.input}
          placeholder="PIN de Segurança"
          placeholderTextColor="#999"
          value={pin}
          onChangeText={setPin}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.botaoVermelho}
          onPress={enviarOcorrencia}
        >
          <Text style={styles.textoBotao}>ENVIAR OCORRÊNCIA</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.tituloSecao}>Relatório de Carga de Metais</Text>

        <TextInput
          style={styles.input}
          placeholder="Carga de Cromo (Kg)"
          placeholderTextColor="#999"
          value={pesoCromo}
          onChangeText={setPesoCromo}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Carga de Níquel (Kg)"
          placeholderTextColor="#999"
          value={pesoNiquel}
          onChangeText={setPesoNiquel}
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.botaoAzul}
          onPress={calcularMetais}
        >
          <Text style={styles.textoBotao}>CALCULAR TOTAL</Text>
        </TouchableOpacity>

        <View style={styles.caixaResultado}>
          <Text style={styles.textoResultado}>
            Peso Total da Carga: {totalMetais.toFixed(2)} Kg
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    padding: 20,
  },

  logo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#38bdf8",
    marginTop: 40,
  },

  subtitulo: {
    color: "#94a3b8",
    marginBottom: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#1e293b",
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },

  tituloSecao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },

  input: {
    backgroundColor: "#334155",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    color: "#fff",
  },

  botaoVermelho: {
    backgroundColor: "#dc2626",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },

  botaoAzul: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },

  caixaResultado: {
    marginTop: 15,
    backgroundColor: "#0ea5e9",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  textoResultado: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});