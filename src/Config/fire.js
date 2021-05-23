import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyCzEITJOQya1w4elrNqTPF_3ZL69OPFFZE",
  authDomain: "react-sbts.firebaseapp.com",
  databaseURL: "https://react-sbts-default-rtdb.firebaseio.com",
  projectId: "react-sbts",
  storageBucket: "react-sbts.appspot.com",
  messagingSenderId: "345068467806",
  appId: "1:345068467806:web:5d19c927e6a0921816a6cf"
  };
  const fire = firebase.initializeApp(firebaseConfig);
    
    //  var db = firebaseApp.firestore();

    export const auth =firebase.auth()
    export  const db = firebase.firestore();
    export const storage= firebase.storage();


  //  export default  {
  //    db: db,
  //    auth: auth 
  // }
  export default fire;
