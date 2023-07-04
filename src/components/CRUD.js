import React, {useRef, useState } from 'react'
// import './CRUD.css';

function CRUD() {
    const list = [
        {
            id:1,
            name:"HP",
            price:"7890"
        },
         {
            id:2,
            name:"lenevo",
            price:"7890"
        },

    ]
    const [lists, setList] = useState(list)
  return (
    <>
    <div className='crud'>
        <div>
        <Addlist setList={setList}/>
        <table>
            {
                lists.map((current)=>(
                <tr>
                  <td>{current.name} </td>
                  <td> {current.price}  </td>
                  <td>
                    <button className='delete'>Delete</button>
                    <button className='edit'>Edit</button>
                  </td>
                </tr>
                 ) )
            }
        </table>
        </div>
    </div>
    </>
  )
}

function Addlist({setList}){
    const nameRef=useRef()
    const priceRef=useRef()
    function handleSubmit(event){
        event.preventDefault();
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const newlist ={
            id:3,
            name,
            price
        }
   setList ((prevList)=>{
    return prevList.concat(newlist)
   })
   nameRef.current.value= ""
   priceRef.current.value= ""


    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter the Name" ref={nameRef}/>
            <input type="text" name="price" placeholder="Enter the price" ref={priceRef}/>
            <button type="submit">Add</button>

        </form>
    )
}
export default CRUD