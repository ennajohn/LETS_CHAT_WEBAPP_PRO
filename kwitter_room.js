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
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("username");
  document.getElementById("user_name").innerHTML = "Welcome" + user_name + " !";

  function add_room() {
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";

     firebase.database().ref("/").child(room_name).update({
      purpose: "Adding Room Name"
     });

      function getData() 
      {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
       Room_names = childKey;
//Start code

console.log("Room Name = " + Room_names);
row = "<div class='room_name' id=" + Room_names+ "onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
  }

function redirectToRoomName(clicked_name){
 console.log(clicked_name);
 localStorage.setItem("room_name",clicked_name);
 window.location = "kwitter_page.html";
  }

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}
  
function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref("room_name").push({
        name: user_name,
        message: msg,
        like: 0
  });
  document.getElementById("msg").value;


  
}
