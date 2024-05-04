// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVU9Q8MXoE8nchpLXzPmd82Mt09k9RZbs",
  authDomain: "jobforu-235c1.firebaseapp.com",
  projectId: "jobforu-235c1",
  storageBucket: "jobforu-235c1.appspot.com",
  messagingSenderId: "1077248430194",
  appId: "1:1077248430194:web:4ff4f253f4f837c91af2eb",
  measurementId: "G-QK0NDS8R64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;