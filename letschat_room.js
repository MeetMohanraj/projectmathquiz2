const firebaseConfig = {
      apiKey: "AIzaSyDoz4HfJumOmbSSqXqzYB_v1K7uXNaEB98",
      authDomain: "kwitter3-36167.firebaseapp.com",
      databaseURL: "https://kwitter3-36167-default-rtdb.firebaseio.com",
      projectId: "kwitter3-36167",
      storageBucket: "kwitter3-36167.appspot.com",
      messagingSenderId: "666683850148",
      appId: "1:666683850148:web:63cb0b5a85b6f0220bd531"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom(){
      room_name = document.getElementById("room_name").value;


      localStorage.setItem("roomname",room_name);

      

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
}
    

    function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;

       Room_names = childKey;

      //Start code
      console.log("room_name - "+Room_names);

      row = "<div class = 'room_name' id ="+Room_names+" onclick ='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
      
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "letschat_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

