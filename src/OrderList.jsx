import React from "react";

function OrderList(props) {

    return(
    <div>
        <ul >
        {props.orders.map((order) =>
            <li className="list-group-item list-group-item-action" key={order.id}>
            <div className="list-container">
                    <div >{order.title}</div>
                    <button className="inc-dec" type="button" onClick={() => 
                        props.onRemoveOrder({...order, counter: order.counter})} >-</button>
                    <button className="inc-dec" type="button" onClick={() => 
                        props.updateOrder({...order, counter: 1})} >+</button>
                    <div >X {order.counter}</div>
                    <div >SEK {Number((order.counter * order.price).toFixed(2))}</div>
                    
            </div>
            </li>
            )}
        </ul>
    </div>);
}

export default OrderList