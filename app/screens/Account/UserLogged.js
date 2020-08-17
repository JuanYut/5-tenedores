import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import * as firebase from "firebase";

export default function UserLogged() {
  return (
    <View>
      <Text>UserLogged</Text>
      <Button title="Cerrar Sesión" onPress={() => firebase.auth().signOut()} />
    </View>
  );
}