import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

// Need to update below config
const config = {
    apiKey: "AIzaSyDQWmHRJsU99V46uTeg5zolcj6Z0p-fwak",
    authDomain: "exam-cd2db.firebaseapp.com",
    projectId: "exam-cd2db",
    storageBucket: "exam-cd2db.appspot.com",
    messagingSenderId: "998510104034",
    appId: "1:998510104034:web:7540bc4d2b6981e1183dbb",
    measurementId: "G-QSPXP1SDT9"
};

if (!app.apps.length) {
const firebase = app.initializeApp(config)
}
const auth = app.auth()
const db = app.database()
const firestore = app.firestore()

const getUsers = () => {
    let borrow = 0;
    return new Promise((resolve, reject) => {
      firestore.collection("orders")
      .orderBy("state", "desc")
        .onSnapshot((snapshot) => {
        if(borrow<1){

        }else{
            setTimeout(() => {  location.reload(); }, 500);
        }
        console.log('onSnapshot Called!')
        
        let updatedIds = snapshot.docs.map(doc => doc.id)
        console.log(updatedIds);
        let updatedData = snapshot.docs.map(doc => doc.data())
        console.log(updatedData);
        for(let i=0; i<updatedIds.length; i++){
            updatedData[i].id = updatedIds[i];
        }
        resolve(updatedData)
        borrow++
      }, reject)
    })
  }

  export {
    auth,
    app,
    getUsers
};