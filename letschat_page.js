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
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      console.log("message "+msg);
      firebase.database().ref(room_name).push({
            username:user_name,
            message:msg,
            like:0
      });
      
      
      document.getElementById("msg").innerHTML = "";
}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code


                        //End code
                  }
            });
      });
}
getData();