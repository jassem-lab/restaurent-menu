import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Item = (props) =>
<div>
<div>
         <Card 
         className="shadow m-2 " 
         style={{width : 250}}
         >
        <CardImg 
        top width="100%" 
        height ="150px" 
        src={props.img} />
        <CardBody>
          <CardTitle>{props.dish}</CardTitle>
          <CardSubtitle>{props.price}</CardSubtitle>
        </CardBody>
         </Card>
      </div>
</div>

export default Item ; 
