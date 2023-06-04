import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Contacts from 'expo-contacts';

const ContactApp = () => {
    
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync();
        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactPress = (contact) => {
    setSelectedContact(contact);
  };

  const renderContact = ({ item }) => (
    <TouchableOpacity onPress={() => handleContactPress(item)} style={styles.contact}>
      <MaterialIcons name="account-circle" size={40} color="#ccc" style={styles.avatar} />
      <View style={styles.contactDetails}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactPhone}>{item.phoneNumbers && item.phoneNumbers[0] ? item.phoneNumbers[0].number : 'No phone number'}</Text>
      </View>
      <TouchableOpacity onPress={() => console.log('Call')} style={styles.callButton}>
        <MaterialIcons name="phone" size={25} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderContactDetails = () => (
    <Modal visible={selectedContact !== null} onRequestClose={() => setSelectedContact(null)}>
      <View style={styles.modalContainer}>
        {selectedContact && (
          <View style={styles.modal}>
            <Text style={styles.modalText}>Name: {selectedContact.name}</Text>
            <Text style={styles.modalText}>Phone: {selectedContact.phoneNumbers && selectedContact.phoneNumbers[0] ? selectedContact.phoneNumbers[0].number : 'No phone number'}</Text>
            <TouchableOpacity onPress={() => setSelectedContact(null)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholder="Search"
        />
        <TouchableOpacity onPress={() => console.log('Search')}>
          <MaterialIcons name="search" size={25} color="#007aff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredContacts}
        renderItem={renderContact}
        keyExtractor={(item) => item.id.toString()}
      />
      {renderContactDetails()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },

    contact: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 10,
    },
    avatar: {
      marginRight: 10,
    },
    contactDetails: {
      flex: 1,
    },
    contactName: {
      fontSize: 16,
      color: 'white',

    },
    contactPhone: {
      color: '#888',
    },
    callButton: {
      backgroundColor: 'green',
      borderRadius: 50,
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
    },
  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
 

  modal: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
modalText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
    fontWeight: "bold",
    textAlign: 'center'
},
closeButton: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-end',
},
closeButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: "center"
},
});

export default ContactApp;
