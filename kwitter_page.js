
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVI3bM4FeINR7qcAzeYaNj1FjuqiIZ5Jw",
  authDomain: "lets-chat-app-pro.firebaseapp.com",
  databaseURL: "https://lets-chat-app-pro-default-rtdb.firebaseio.com",
  projectId: "lets-chat-app-pro",
  storageBucket: "lets-chat-app-pro.appspot.com",
  messagingSenderId: "1029574807971",
  appId: "1:1029574807971:web:069ba3687545b7ccdeca16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  console.log("room name" + room_name);
  console.log("user name" + user_name);

  function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "index.html";
  }

  
  function send(){
    msg = document.getElementById("msg").value;
    console.log("Message " + msg);
    firebase.database().ref("room_name").push({
      like: 0,
      message : msg,
      username : user_name,
      
  });
  document.getElementById(msg).value = "";
}

  function getData(){firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML =""; snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key})})};
  getData();
   


