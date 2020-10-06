import React from 'react';
import WithCounter from '../hoc/withcounter';
class ClickCounter extends React.PureComponent{
     
render()
{
    return(
        <div>
            <h2>{this.props.count}</h2>
            <button onClick={this.props.incrementcounter}>Increment</button>
        </div>
    )
}
}
    
 
export default WithCounter(ClickCounter);