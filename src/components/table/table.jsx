import React from 'react';
import contactlist from '../data/contactlist';
import './table.css'
const Table = () => {
    
    
    return ( <div>
        <table className="otable">
            <thead>
           <tr><th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Gender</th></tr>       
            </thead>
      {contactlist.map(c=><tbody><tr>
        <td> {c.name}</td>
        <td> {c.email}</td>
        <td>{c.mobile}</td>
        <td>{c.gender}</td></tr></tbody>)}</table>
        
        
        
    </div> );
}
 
export default Table;