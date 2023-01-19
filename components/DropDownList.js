import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal } from 'react-native';

const languages = [
  {label: 'Lokasjon', value: 'location'},
  {label: 'reisebilett', value: 'ticket'},
];

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showList, setShowList] = useState(false);

  return (
    <View style={{position:'relative', height:'10%', right:'34%', bottom:'20%'}}>
    <TouchableOpacity style={styles.selectedContainer} onPress={() => setShowList(!showList)}>
      <Text style={styles.selectedText}>
        {selectedLanguage ? selectedLanguage.label : "meny"}
      </Text>
    </TouchableOpacity>
    <Modal visible={showList} animationType="slide" >
      <View style={styles.listContainer}>
        <FlatList
          data={languages}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => {
                setSelectedLanguage(item);
                setShowList(false);
              }}>
              <Text style={styles.itemText}>{item.label}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.value}
        />
      </View>
    </Modal>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  selectedContainer: {
    width: '90%',
    backgroundColor: '#000000',
    alignSelf: 'center',
    margin: 10,
  },
  selectedText: {
    fontSize: 18,
    color: 'white',
    padding: 10,
    alignSelf: 'center',

borderRadius: 5,
borderWidth: 1,
borderColor: 'white',
},
listContainer: {
flex: 1,
backgroundColor: '#000000',
alignItems: 'center',
justifyContent: 'flex-start',
paddingTop: 40,
},
itemContainer: {
width: '90%',
backgroundColor: '#000000',
alignSelf: 'center',
margin: 10,
padding: 10,
borderRadius: 5,
borderWidth: 1,
borderColor: 'white',
},
itemText: {
fontSize: 18,
color: 'white',
alignSelf: 'center',
},
});

