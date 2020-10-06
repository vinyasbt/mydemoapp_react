import React from 'react';
import ClickCounter from './clickCounter';
import HoverCounter from './HoverCounter';
import {Consumer} from'../app-context/app-context';
const ParentCounter = () => {
    return ( 
        <Consumer>
            {
                context=>{
                    return(
    <div>
        <h2>{context.getvalue.prop1}</h2>
        <ClickCounter />
        <HoverCounter />
    </div>
                    )
}
}                
    </Consumer> );
}
 
export default ParentCounter;