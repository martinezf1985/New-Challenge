import React, { useEffect } from 'react'
import {useForm} from '../../hooks/useForm'
import './style.css'


export const NewArticle2 = (props) => {
    const [formValues, handleInputChange] = useForm({
     title: "",
     userId:"",
      body: ""
    });
    const { title, userId, body } = formValues;

    useEffect(() => {
        console.log("formState cambio");
      },[formValues]);

      


// const handleInputChange= ({target}) =>{
//     setformState({
//         ...formState,
//         [target.name]: target.value
//     });
// }



  const handleSubmit =(e)=> {
    e.preventDefault();
    console.log(formValues)
  }

 
    return (
      <div className="centered">
          <form onSubmit={handleSubmit}>
        <h2>Add new article</h2>
        <div>
          <label className="label" htmlFor="">Title</label>
          <input name="title" type="text" value={ title } onChange={handleInputChange}/>

          <label className="label" htmlFor="">Items count</label>
          <input name="userId" type="text" value={ userId } onChange={handleInputChange}/>

          <label className="label" htmlFor="">Body</label>
          <input name="body" type="text" value={ body } onChange={handleInputChange}/>
          
          {/* <input className="button" type="submit" value="Aceptar" /> */}
        </div>
        <button className='button' type='submit'  value='Aceptar' >Aceptar</button>
        </form>
      </div>
    )
  
    };

   
