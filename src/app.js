import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';



class App extends Component {
  componentWillMount() {
    firebase.initializeApp ({
    apiKey: 'AIzaSyC66DYN4IFOx3iwHCJkPW6uToKDTIQrOTY',
    authDomain: 'amaini-1426.firebaseapp.com',
    databaseURL: 'https://amaini-1426.firebaseio.com',
    projectId: 'amaini-1426',
    storageBucket: 'amaini-1426.appspot.com',
    messagingSenderId: '1064114628737'
  });
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
      <LoginForm />
      </View>

    );
  }
}
export default App;
