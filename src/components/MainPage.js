import React, { useState } from 'react'
import myList from './myList'

function MainPage() {
  const [items,setItems]=useState(myList);

  const filterItem = (str)=> {
    if (str==="All") {
        setItems(myList);
    } else {
        setItems(myList.filter((item)=>
          item.category.includes(str)
        ));
    }
};
  return (
    <>
      <header>
        <div className='logo'>
          <img src=''></img>
        </div>
        <h1 className='title'>CHECK OUT SOME AMAZING FOODS HERE</h1>
      </header>
      
      <div className='navBar'>
      <button className='btn' onClick={()=>{filterItem('All')}}>All Dishes</button>
        <button className='btn' onClick={()=>{filterItem('veg')}}>Veg Dishes</button>
        <button className='btn' onClick={()=>{filterItem('nonVeg')}}>Non-Veg Dishes</button>
        <button className='btn' onClick={()=>{filterItem('american')}}>American Dishes</button>
        <button className='btn' onClick={()=>{filterItem('italian')}}>Italian Dishes</button>
        <button className='btn' onClick={()=>{filterItem('southindian')}}>South Indian Dishes</button>
        <button className='btn' onClick={()=>{filterItem('drinks')}}>Drinks</button>
      </div>
      <br/>
      <hr/>

      <div className='postDiv'>
      {
        items.map((item,index)=>{
          return(
            <div className='post'key={index}>
                        <div className='dish-image'>
                          <img className='dishProperties' src={item.image} alt={item.name}></img>
                        </div>
                        <h2>{item.name}</h2>
                        <p align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Ipsum, magni corruerror eveniet perferendis dolor molestiae culpa, eligendi distinctio expedita? <br /></p>
                    <div className='price-section'>
                    <i>Price: {item.price}</i>
                    </div>
                    </div>
          )
        })
      }
      </div>
    </>

  )
}

export default MainPage