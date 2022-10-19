const firebaseConfig = {
    apiKey: "AIzaSyAG4UuHPlcfZqPGkm0I8Of3YbbZXNoLXaA",
    authDomain: "furniture-store-c7629.firebaseapp.com",
    projectId: "furniture-store-c7629",
    storageBucket: "furniture-store-c7629.appspot.com",
    messagingSenderId: "377453862763",
    appId: "1:377453862763:web:8f196d4bfbcb0949edb62e",
    measurementId: "G-488PX5QBG7"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)

    const db = firebase.firestore();