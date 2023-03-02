// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXErL8_vJb1OeOv4A62KU-0wnqcKglkOM",
  authDomain: "knot-26e47.firebaseapp.com",
  databaseURL:
    "https://knot-26e47-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "knot-26e47",
  storageBucket: "knot-26e47.appspot.com",
  messagingSenderId: "794044751969",
  appId: "1:794044751969:web:36c9e11b2081a96143ca20",
  measurementId: "G-G1GRR6VK5M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let database = firebase.database();

dbRef = getDBReference("UserData");
dbRef.on("child_added", (data) => {
  console.log("UserName");
  if (data.key == "UserPassword") {
    for (key in data.val) {
      console.log(data.val[key]);
    }
  } else if (data.key == "UserName") {
  } else if (data.key == "URL") {
  }
});

function getDBReference(refName) {
  let ref = database.ref(refName);
  // RefVal.push(ref);
  // event listeners
  ref.on("child_added", (data) => {
    console.log("!DB ADDED");
    console.log(data.key);
    console.log(data.val());
  });
  ref.on("child_removed", (data) => {
    console.log("!DB REMOVED");
    console.log(data.key);
    console.log(data.val());
  });
  ref.on("child_changed", (data) => {
    console.log("!DB CHANGED");
    console.log(data.key);
    console.log(data.val());
  });
  ref.on("child_moved", (data) => {
    console.log("!DB MOVED");
    console.log(data.key);
    console.log(data.val());
  });
  return ref;
}

function clearDBReference(refName) {
  let ref = database.ref(refName);

  // clear out the previous data in the key
  ref
    .remove()
    .then(function () {
      console.log("! DB Remove succeeded.");
    })
    .catch(function (error) {
      console.log("! DB Remove failed: " + error.message);
    });
}
