import React from 'react';
import firebase from '../firebase/firebase';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Page() {
    const [items, setItems] = useState([]);

    useEffect(() => {
          const db = firebase.firestore();
          (db.collection("events").get().then(items => {
          const docData = items.docs;
          const data = docData.map(doc => doc.id.slice(0,5));
          setItems(data.slice(0,5));
        console.log(data.slice(0,5));
  }));
}, []);    

  return (
    <div>
      {items.map(item => (
        <h1 key={item}>
        <Link to={`/Page/${item}`}>{item}</Link>
        </h1>
      ))}
    </div>
  );
}
  export default Page;