# Steps to download the apk (Android only) : 
* Right click on the file named as contacts.apk , click on save link as and save it to your local machine.
* Now you can simply install the apk file on your android device and it is ready to use.

# Libraries and plugins : 
1. expo-cli (global)
2. expo-status-bar
3. expo-constants
4. react
5. react-native
6. @bable/core
7. To run on web please add (npx expo install react-dom react-native-web @expo/webpack-config) to the project.

* This code is a simple Contacts app that utilizes React Native and Expo's Contacts API to display and filter contacts on a user's device. It also allows for the selection of a contact to display more details in a modal and provides a basic phone call functionality.

* The app mainly consists of a functional component named ContactApp that handles the rendering of the contacts, search bar, and the modal for displaying more details. It uses the useState and useEffect hooks for state management and asynchronous data fetching respectively.

* The app utilizes the FlatList component to display the contacts and TouchableOpacity components to enable the ability to tap and select individual contacts. The search bar makes use of the TextInput component and enables the user to search through their contacts.

* Overall, this code provides a good starting point for creating a Contacts app and can be easily customized to fit the specific requirements of the user.




# code Explanation :-
* This code defines a functional component named ContactApp which makes use of various hooks such as useState and useEffect for state management and data fetching respectively. 
* The component first requests permission to access the device's contacts using the Expo Contacts API, and then displays the user's contacts in a FlatList component. 
* It also provides the ability to search for a specific contact using a TextInput component and the ability to view more details of a contact by displaying a modal on selection of that contact using the TouchableOpacity component. 
* It also includes a basic phone call functionality using the TouchableOpacity component. The renderContact function is responsible for rendering individual contacts in the FlatList, while the renderContactDetails function is responsible for displaying the selected contact's details in a modal.
* Finally, the filteredContacts variable uses the filter method to filter contacts based on the search query entered by the user. Overall, this code provides a simple Contacts app that can be easily customized based on specific requirements.

*In case unable to download the apk from the github repo please refer to this QR scan it with google lens:
![Screenshot 2023-06-05 014107](https://github.com/riva211/riva_proedge/assets/77054074/c9b5675b-4d52-4631-87d4-7e2f0f3d3798)

# App screen shots


![WhatsApp Image 2023-06-05 at 02 55 12](https://github.com/riva211/riva_proedge/assets/77054074/a4a53f2f-8aa6-4823-81e8-b3615ef4a601)
![WhatsApp Image 2023-06-05 at 02 55 10](https://github.com/riva211/riva_proedge/assets/77054074/69658ddd-3df6-494b-99a8-2a4f83c80425)

![WhatsApp Image 2023-06-05 at 02 55 10](https://github.com/riva211/riva_proedge/assets/77054074/47e5bf97-43a5-4ea6-83fd-cd2337ab8860)




