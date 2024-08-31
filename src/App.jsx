import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuCard from './MenuCard.jsx'
import Descriptions from './Description.jsx';
import OrderList from './OrderList.jsx';

function App() {

    const [orders, setOrders] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [confAfrica, setConfAfrica] = useState(false);
    const [orderToRemove, setOrderToRemove] = useState(null);

    function updateOrder(newOrder) {

        const orderExists = orders.some(order => order.id === newOrder.id);

        if (orderExists) {
            setOrders(orders.map(order =>
                order.id === newOrder.id
                    ? { ...order, counter: order.counter + 1 }
                    : order
            ));
        } else {
            setOrders([...orders, newOrder]);
        };
    };

    function removeOrder(scrapOrder) {

        const order = orders.find(order => order.id === scrapOrder.id);


        if (scrapOrder.counter > 1) {
            setOrders(orders.map(order =>
                order.id === scrapOrder.id
                    ? { ...order, counter: order.counter - 1 } : order));
        } else {

            if (order.counter === 1) {
                setOrderToRemove(scrapOrder.id);
                setShowModal(true);
            } else {
                setOrders(orders.filter(order => order.id !== scrapOrder.id));
            }
        }
    };

    function iamPicky() {
        setShowModal(false);
        setConfAfrica(true);
    }

    function confirmRemoveOrder() {
        setOrders(orders.filter(order => order.id !== orderToRemove));
        setConfAfrica(false);
        setOrderToRemove(null);
    };

    function cancelRemoveOrder() {
        setShowModal(false);
        setConfAfrica(false);
        setOrderToRemove(null);
    };


    const totalSum = orders.reduce((sum, order) => sum + (order.price * order.counter), 0);

    return (
        <>
            <h1 className="main-title">Choose Your Poison</h1>
            <div className="container">
                <MenuCard id={Descriptions[0].id} pic={Descriptions[0].pic} title={Descriptions[0].title}
                    text={Descriptions[0].text} price={Descriptions[0].price} counter={0} updateOrder={updateOrder} />
                <MenuCard id={Descriptions[1].id} pic={Descriptions[1].pic} title={Descriptions[1].title}
                    text={Descriptions[1].text} price={Descriptions[1].price} counter={0} updateOrder={updateOrder} />
                <MenuCard id={Descriptions[2].id} pic={Descriptions[2].pic} title={Descriptions[2].title}
                    text={Descriptions[2].text} price={Descriptions[2].price} counter={0} updateOrder={updateOrder} />
                <MenuCard id={Descriptions[3].id} pic={Descriptions[3].pic} title={Descriptions[3].title}
                    text={Descriptions[3].text} price={Descriptions[3].price} counter={0} updateOrder={updateOrder} />
            </div>
            <div>
                <h3>Your order</h3>
                <OrderList orders={orders} updateOrder={updateOrder} onRemoveOrder={removeOrder} />
                <div className="list-group">Total: SEK {totalSum}</div>

            </div>
            <Modal show={showModal} onHide={cancelRemoveOrder} backdrop="static">

                <Modal.Body>Are you sure you want to remove this order?</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={cancelRemoveOrder}>
                        No
                    </Button>
                    <Button variant="secondary" onClick={iamPicky}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={confAfrica} onHide={cancelRemoveOrder} backdrop="static">

                <Modal.Body>SHAME ON YOU!<br/>Children are STARVING in Africa, and you're so damn picky!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={cancelRemoveOrder}>
                        Alright, alright, I'll buy it!
                    </Button>
                    <Button variant="secondary" onClick={confirmRemoveOrder}>
                        I don't care!
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );

}

export default App