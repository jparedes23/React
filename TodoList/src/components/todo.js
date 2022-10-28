import { useState } from "react"

export default function Todo({ item , onUpdate}){
    const [isEdit, setEdit]= useState(false); 

  

    function FormEdit(){
        const[newValue, setNewValue]= useState(item.title)
        //cuanod cambien el texto vamos a actualizar el estado
        
        function handleSubmit (e) {
            e.preventDefault();
        }
    
        function handleChange(e) {
            const value = e.target.value
            setNewValue(value)
        }

        function handleclick() {
            onUpdate(item.id, newValue);
            setEdit(false)
        }


        return <form className="todoUpdateForm" onSubmit={handleSubmit}>
                    <input type="text"  className="todoinput" onChange={handleChange}value={newValue} />
                    <button className="button" onClick={handleclick}>update</button>
                </form>
    }

    function TodoElement(){

        return  (
                <div className="todoInfo">
                    {item.title} <button onClick={()=> setEdit(true)}>Edit</button>
                    <button>Delete</button>
                </div>
                );
    }
  //* si esto es edit voy a mostrar mi FormEdit*/
    return  <div className="todo">{isEdit ? <FormEdit /> : <TodoElement/>} </div>

}

//operador ternario -> (?) "if-si"
// (:)-> "else-si no"