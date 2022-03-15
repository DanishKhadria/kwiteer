
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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
 room_name=localStorage.getItem ("room_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name +"!";
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room-name' id="+Room_names+" onclick= ' redirectToRoomName(this.id)' >#"+Room_names+"</div><hrs>";
      document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();


function addRoom()
      {
             room_name = document.getElementById("room_name").value
             firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });

             localStorage.setItem("room_name" , room_name);
             window.location = "kwitter_page.html";
      }


function redirectToRoomName (name)
{
      console.log (name);
      localStorage.setItem("romm_name" , name);
      window.location = "kwitter_page.html";
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

