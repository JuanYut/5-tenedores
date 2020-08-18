import * as firebase from "firebase";

export function reauthenticate(password) {
  const user = firebase.auth().currentUser;
  const credencials = firebase.auth.EmailAuthProvider.credential(
    user.email,
    password
  );
  return user.reauthenticateWithCredential(credencials);
}
