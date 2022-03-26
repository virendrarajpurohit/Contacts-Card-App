import React, { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then(response => response.json())
      .then(data => {
        setContacts(data.results);
      });
  }, []);
  return (
    <>
        {
          contacts.map(contact => (
            <ContactCard
                avatar={contact.picture.large}
                name={contact.name.first + " " + contact.name.last}
                email={contact.email}
                age={contact.dob.age}
              />
          ))
        }
    </>
  );
}

const ContactCard = (props) => {
  const [showAge, setShowAge] = useState(true);
  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div>
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>Toggle Age</button>
        {showAge && <p>Age: {props.age}</p>}
      </div>

    </div>
  );
}

export default App;
