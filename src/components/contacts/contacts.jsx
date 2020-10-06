import React from 'react';
import contactlist from '../data/contactlist';
import Contact from '../contact/contact';
const Contacts = () => {
    let contacts=contactlist.map(c=><Contact name={c.name}
                                                email={c.email}
                                                mobile={c.mobile}
                                                gender={c.gender}
                                                contacted={c.isContacted}/>)
    return ( <div>
        {contacts}
    </div> );
}
 
export default Contacts;