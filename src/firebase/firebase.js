
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBADM3jTNRsohq2G5PDA1udS0ip4-5wCoM",
  authDomain: "beerstoresantafe-velazquez.firebaseapp.com",
  databaseURL: "https://beerstoresantafe-velazquez-default-rtdb.firebaseio.com",
  projectId: "beerstoresantafe-velazquez",
  storageBucket: "beerstoresantafe-velazquez.appspot.com",
  messagingSenderId: "614338775492",
  appId: "1:614338775492:web:512eab72de24ce60b27c91",
  measurementId: "G-CV74F5XLSK"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);