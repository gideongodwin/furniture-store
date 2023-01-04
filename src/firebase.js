const firebaseConfig = {
  apiKey: "AIzaSyCdn9L_SN6vinL6MN1hPHlrslhAtCvkglQ",
  authDomain: "solace-53263.firebaseapp.com",
  projectId: "solace-53263",
  storageBucket: "solace-53263.appspot.com",
  messagingSenderId: "440742933750",
  appId: "1:440742933750:web:5c046c08c535fc5c2528d7",
  measurementId: "G-5HRWPN86XE"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    firebase.analytics();
    
    const db = firebase.firestore();