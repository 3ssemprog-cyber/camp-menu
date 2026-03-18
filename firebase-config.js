// ===================================================
//  ضع بيانات Firebase بتاعتك هنا
//  من: Firebase Console > Project Settings > Your Apps
// ===================================================
const firebaseConfig = {
  apiKey: "AIzaSyBeG0LuWP3DW-B7FGU7u1BXd9J99Wvqg18",
  authDomain: "camp-menu-85b61.firebaseapp.com",
  projectId: "camp-menu-85b61",
  storageBucket: "camp-menu-85b61.firebasestorage.app",
  messagingSenderId: "861985571857",
  appId: "1:861985571857:web:7aadfb003aecad32aeddb0"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
