import React from 'react';
import './contacts.css';

const Contacts = () =>{
    return (
        <div className="contacts">
            <a name="contacts" className="cotacts__adress">Селезневская ул., 56, Москва, 127473</a>
            <div className="contacts__tel">+7(495)324-13-53</div>
            <div className="contacts__email">example@gmail.com</div>
        </div>
    )
}

export default Contacts;