import React from 'react';
import Card from './card' ; 
const arr =[
  {
    dish : "Spaghetti",
    img : "https://img.cuisineaz.com/610x610/2013-12-20/i2142-spaghetti-a-la-sauce-tomate.jpg", 
    price : " 10dt"
  },
  {
    dish : "Couscous",
    img : "https://static.750g.com/images/600-600/4b4c2c9c149f4f59c4a914df44278d41/couscous-tunisien.jpeg", 
    price : " 10dt"
  },
  {
    dish : "Pizza",
    img : "https://www.galbani.fr/wp-content/uploads/2017/07/pizza_parma.png", 
    price : " 10dt"
  },
  {
    dish : "Sandwich",
    img : "https://img.cuisineaz.com/680x357/2017-08-01/i131220-.jpeg", 
    price : " 10dt"
  }
]

 const List = (props)=>{
 
              // FOR METHOD
    // let newArray = [] 
    // for (let i = 0; i<arr.length; i++){
    //   newArray.push(<Card dish={arr[i].dish} img={arr[i].img} price={arr[i].price} />)
    // }

    // return newArray

              // FOREACH METHOD

  //   let newArray = [] 
  //   arr.forEach((element , index)=>{
  //       newArray.push(<Card dish={element.dish} 
  //         img={element.img} price ={element.price} />)
  //   });
  // return newArray
  

              // MAP METHOD 

 return arr.map((element , index)=>
 <Card 
  dish={element.dish} 
  img={element.img} 
  price ={element.price} />
 )             

}

export default List; 