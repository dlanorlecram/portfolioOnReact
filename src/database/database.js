import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBVEYKZLUFRz5tf7E0anhynH_EUsGI4xtc',
  authDomain: 'portfolio-afdea.firebaseapp.com',
  databaseURL: 'https://portfolio-afdea.firebaseio.com/'
};

// Initialisation de ma base de donnée
firebase.initializeApp(config);

//firebase.auth().createUserWithEmailAndPassword(email, password)
//Creation de la référence 'useradmin' & 'projects'
//const dbRefUserAdmin = database.ref().child('useradmin');
//const dbRefProject = database.ref().child('projects');

//dbRefProject.on('value',(snap) => console.log(snap.val()));

export default firebase;
