//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBsDHewT4HSVNFl3Y5at4NRgMx09ymGk28",
      authDomain: "kwitter-bf631.firebaseapp.com",
      databaseURL: "https://kwitter-bf631-default-rtdb.firebaseio.com",
      projectId: "kwitter-bf631",
      storageBucket: "kwitter-bf631.appspot.com",
      messagingSenderId: "858116302810",
      appId: "1:858116302810:web:23b9bf703ded0b4a5942e3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);   
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();



function send () {
      msg = document.getElementById ("msg").value
      firebase.database().ref(room_name).push ({
            name:user_name,
            messsage:msg,
            like:0
      })

      document.getElementById("msg").value = "";
}



