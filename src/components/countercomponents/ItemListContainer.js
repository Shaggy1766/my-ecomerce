import { render } from '@testing-library/react';
import React from 'react';

// class ItemListContainer extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             counter: 0,
//         };
//         this.handlerCounterUp = this.handlerCounterUp.bind(this);
//         this.handlerCounterDown = this.handlerCounterDown.bind(this);
//     }

//     handlerCounterUp() {
//         if(this.state.counter < 10) {
//         this.setState({ counter: this.state.counter + 1});
//         }
//     }
    
//     handlerCounterDown() {
//         if(this.state.counter > -10)
//         this.setState({ counter: this.state.counter - 1});
//     }

//     render() {
//         return(
//         <div className='CounterSection'>
//             <p>Counter: {this.state.counter}</p>
//             <button onClick={this.handlerCounterUp}>Incrementar</button>
//             <button onClick={this.handlerCounterDown}>disminuir</button>
//         </div>
//         )
//     }
// }

const ItemListContainer = ({stock, initial}) => {
    const [count, setCount] = setState(initial);

    


}

export default ItemListContainer;

