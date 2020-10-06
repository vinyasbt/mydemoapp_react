import React, { Component } from 'react';
// const ReceiveChild = (props) => {
//     return ( <div>
//         <ul>{props.sendarray.map(e =><li>child component {e}</li>)}</ul>
//     </div> );
// }
class ReceiveChild extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nums:[]
         }
    }
    componentDidUpdate(prevProps,prevState){
        //initially prevprops=0 and this.props.nums=1 for the first click
        //this condition is done because after render it calls component did update(if condition not there it results to infinite loop)
        if(prevProps.sendarray!==this.props.sendarray)
        {
            this.setState({
                nums:this.props.sendarray
            })
        }
    }
    render() { 
        return ( <div>
            <ul>
                {
                    this.state.nums.map(e =><li>child component {e}</li>)
                }
            </ul>
        </div>);
    }
}
 
export default ReceiveChild;
 
