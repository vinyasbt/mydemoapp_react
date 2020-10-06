import React from 'react';
import './header.css'
function Header()
{
    let appname='my react app';
    let style1={
        color:'green',
        fontFamily:'comic sans ms',
        textDecoration:'underline'

    };
    return(
    <div className="header">
         <h1>Hello {appname}</h1>
     <hr />
     {/* <h2 style={style1}>Demo</h2> */}
    </div>)
}
export default Header;