import React from 'react';
import WithCounter from '../hoc/withcounter';
class HoverCounter extends React.PureComponent{
render()
{
    return(
        <div>
            <h2>{this.props.count}</h2>
            <h1 onMouseOver={this.props.incrementcounter}>Increment</h1>
        </div>
    )
}
}
    
 
export default WithCounter(HoverCounter);