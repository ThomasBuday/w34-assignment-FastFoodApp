import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MenuCard(props) {
  
  const handleAddOrder = (newOrder) => {
      props.updateOrder(newOrder);
    };
  
  return (
    <div>
    <Card style={{ width: '18rem', height: '36rem' }}>
      <Card.Img variant="top" src={props.pic} />

      <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        <div className="text-box">
          <Card.Text>{props.text}</Card.Text>
        </div>
          <Card.Text>SEK {props.price}</Card.Text>
          <Button variant="primary" onClick={() => 
          handleAddOrder({id: props.id, title: props.title, price: props.price, counter: 1})}>Add</Button>
          
      </Card.Body>
    </Card>
    </div>
  );
}

export default MenuCard
