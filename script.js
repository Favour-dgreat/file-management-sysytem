// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBnpaP-C2gRcdFXw3wX7l8Mw5KD29v4wNs",
    authDomain: "filemanagementsystem-74728.firebaseapp.com",
    databaseURL: "https://filemanagementsystem-74728-default-rtdb.firebaseio.com",
    projectId: "filemanagementsystem-74728",
    storageBucket: "filemanagementsystem-74728.appspot.com",
    messagingSenderId: "86600871169",
    appId: "1:86600871169:web:9be2a8e21b0a77dc967f00"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase)

  function uploadImage(){
      const ref = firebase.storage().ref()

      const file = document.querySelector("#photo").files[0]

      const name= new Date () + '–' + file.name
      
      const metadata = {
          contentType:file.type
      }

      const task = ref.child(name).put(file,metadata)

      task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
          console.log(url)
          alert("Image Upload Successful")
          const image = document.querySelector('#image')
          image.src = url       
        })
  }
var button = ('#submit')
