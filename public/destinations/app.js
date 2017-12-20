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
var temp= parameters[0].split("=");
var p=temp[1];
