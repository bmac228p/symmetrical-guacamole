import React from 'react';
import firebase from '../firebase/firebase';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Page() {
    const db = firebase.firestore();
    const [items, setItems] = useState([]);

    useEffect(() => {(db.collection("events").get().then(items => {
          // doc.data() is never undefined for query doc snapshots
          const docData = items.docs;
          const data = docData.map(doc => doc.id);
          setItems(data);
        console.log(data);


  }));

}, []);
  
 
  
;
    

  return (
    <div>
      {items.map(item => (<h1>
        <Link to={`/Page/${item}`}>{item}</Link>
        </h1>
      ))}
    </div>
  );
}
  export default Page;