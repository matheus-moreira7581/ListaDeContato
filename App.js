import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import ContatoInput from './components/ContatoInput';
import ContatoItem from './components/ContatoItem';

export default function App() {
  const [contatos, setContatos] = useState ([]);

  const [contadorContatos, setContadorContatos] = useState(10);

  const adicionarContato = (nome, telefone) => {
    console.log("Contato-Nome: " + nome);
    console.log("Contato-Telefone: " + telefone);
    setContatos (contatos => {
      console.log (contatos);
      setContadorContatos(contadorContatos + 2);
      return [
        {
          key: contadorContatos.toString(),
          value: {nome: nome, telefone: telefone}
        }, 
        ...contatos
      ];
      
    });
    
    //console.log (lembrete);
  }

  const removerContato = (keyASerRemovida) => {
    setContatos(contatos => {
      return contatos.filter(contato => contato.key !== keyASerRemovida);
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeTitle}>Cadastre um nome e um telefone!</Text>
      </View>
      <ContatoInput 
        onAdicionarContato={adicionarContato}
      />
      <FlatList 
        data={contatos}
        renderItem={
          contato => (
            <ContatoItem 
              contato={contato.item.value}
              chave={contato.item.key}
              onDelete={removerContato}
            />
          )
        }
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   telaPrincipalView: {
//     padding: 50
//   },
//   lembreteView: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 6
//   },
//   lembreteTextInput: {
//     width: '80%',
//     borderBottomColor: 'black',
//     borderBottomWidth: 1,
//     marginBottom: 4,
//     padding: 2
//   },
//   itemNaLista: {
//     padding: 12,
//     backgroundColor: '#CCC',
//     borderColor: '#000',
//     borderWidth: 1,
//     marginBottom: 8,
//     borderRadius: 8
//   }
// });
