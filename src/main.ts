import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwcpOK__SdPrVjMZz5yCgtJ6W7AO7tpL4",
  authDomain: "projetovue-b9ed8.firebaseapp.com",
  databaseURL: "https://projetovue-b9ed8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projetovue-b9ed8",
  storageBucket: "projetovue-b9ed8.appspot.com",
  messagingSenderId: "684123511404",
  appId: "1:684123511404:web:1703de5e0dbbc6c4495649",
  measurementId: "G-KSTSQLSNKS"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
