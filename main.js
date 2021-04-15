// Tu configuracion de firebase
//Esta cpnfiguracion cambia segun tu proyecto de firebase, puedes encontrar el scrip en la configuracion 
//de tu proyecto 
  var firebaseConfig = {
      apiKey: "AIzaSyCgl0UEjQY1PQ172KykoeI9dYDF8pcqPC8",
      authDomain: "auditi-contact.firebaseapp.com",
      projectId: "auditi-contact",
      storageBucket: "auditi-contact.appspot.com",
      messagingSenderId: "520924231176",
      appId: "1:520924231176:web:0148ad5d668004221c83bd",
      measurementId: "G-GCNJ57CXVN"
   };
// Inicializacion Firebase
firebase.initializeApp(firebaseConfig);

// En firebase las tablas las podemos conocer como colecciones
//Creamos una coleccion para nuestros datos 
let contactInfo = firebase.database().ref("infos");

// Llamamos el contacto de nuestro archivo html
document.querySelector(".contact-form").addEventListener("submit", submitForm);

//Creamos una funcion para mandar los parametros
function submitForm(e) {
  e.preventDefault();

  //  Obetenemos los valores del formulario
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);
//salvamos valores
  saveContactInfo(name, email, message);
 //Vaciamos formulario una vez enviado y mandamos un mensaje de confirmacion
 alert("Tu mensaje ha sido enviado")
  document.querySelector(".contact-form").reset();
}

// Salvamos la informacion en la base de datos de firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}