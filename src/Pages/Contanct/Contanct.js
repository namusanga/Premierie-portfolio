import React,{useState} from 'react';
import "./Contanct.css";
import {db} from "../../bakendform"

export default  function Contanct() {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name: name,
            email: email,
            message:message,
        })
            .then(() => {
                alert("Message has been submmited 👍");
})
            .catch((error) => {
                alert(error.message);
})
        setName("")
        setEmail("")
        setMessage("")
    };

    return (
        <div>
                <section class="contact section" id="contact">
            <h2 class="section-title">Contact📲</h2>

            <div class="contact__container bd-grid">
                <form class="contact__form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="name" value={name}
                    onChange={(e) => setName (e.target.value)}  class="contact__input"/>
                        <input type="email" placeholder="Email" value={email}
                    onChange={(e) => setEmail (e.target.value)}    class="contact__input" />
                    <textarea value={message} placeholder="Your Message" 
                    onChange={(e) => setMessage (e.target.value)}  id="" cols="0" rows="10" class="contact__input"></textarea>
                    <input type="submit" value="Send Message" class="contact__button button"/>
                </form>
            </div>
        </section>
        </div>
    )
}

