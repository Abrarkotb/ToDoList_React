import React, { useState, useEffect } from "react";


function Additem(){
 const [newitem ,setnewitem]= useState("");
 const [items ,setitems]= useState([])

 useEffect(() => {
  const savedItems = localStorage.getItem('todoItems');
  if (savedItems) {
    setitems(JSON.parse(savedItems));
  }
},[]);

useEffect(() => {
  localStorage.setItem('todoItems', JSON.stringify(items));
}, [items]);


function additems(){
  if (!newitem){
    alert('enter an item')
    return;
  }
   const item = {
    id:Math.floor(Math.random()*1000),
    value :newitem
   };
   setitems(oldlist => [...oldlist,item]);
   setnewitem("");
  
 }
 function deleteitem(id){
    const Newarray = items.filter(item =>item.id !==id);
    setitems(Newarray);

 }
 
 return(
    <div>
    <h1 className='h1'>TO Do List</h1>
    <input className="input" type="text" placeholder="enter your task" value={newitem} onChange={e=> setnewitem(e.target.value)}/>
    <button className="but" onClick={()=>additems()}> Add </button>
    <ul>
        {items.map(items =>{
            return(
                <div className="div" key={items.id}> {items.value}<button className="but2" onClick={()=> deleteitem(items.id)}>delet</button> </div> 
            )
        })}
    </ul>
    </div>
 )
   
}
export default Additem;