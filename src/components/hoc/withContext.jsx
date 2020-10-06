import React, { Component } from 'react';
import { Consumer } from '../app-context/app-context';
const WithContext=(OriginalComponent)=>{
    class NewComponent extends React.Component{
        render(){
            return(
            <Consumer>{
                context=>{
                    return(
                        <OriginalComponent context={context} />
                    )
                }
                }
            </Consumer>
            );
        }

    }
    return NewComponent

}
export default WithContext;