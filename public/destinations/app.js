// Initialize Firebase
var config = {
apiKey: "AIzaSyALIzNOAKDQldh_Lu8j0FxMMF30teazWqk",
authDomain: "findy-b69e4.firebaseapp.com",
databaseURL: "https://findy-b69e4.firebaseio.com",
projectId: "findy-b69e4",
storageBucket: "findy-b69e4.appspot.com",
messagingSenderId: "227043781907"
};
firebase.initializeApp(config);


  var parameters = location.search.substring(1).split("&");
  var temp1= parameters[0].split("=");
  var category=temp1[1];
  var temp2= parameters[1].split("=");
  var place=temp2[1];
  console.log(place+" "+category);
