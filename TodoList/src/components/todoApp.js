import { useState } from "react";
import Todo from "./todo";

export default function TodoApp() {
    const [title, setTitle] = useState("holA"); //variable que va a capturar el imput
    const [todos, setTodos ] = useState([])

    function handleChange(e) {
        const value = e.target.value
        setTitle(value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }
        const temp = [...todos] ///los 3 puntos sirven para copiar arreglos
        temp.unshift(newTodo)

        setTodos(temp)
    }

    function handleclick(id, value){
        //copiamos todo el array de todos
        const temp = [...todos];
        //buscamos por el elmento por el id q esta en la funcion
        //( buscar elemento  temp.find......)(item => DONDE EL ELEMENTO ES IGUAL AL item.id !===! EL ID DE LA FUNCION id)
        const item = temp.find(item => item.id === id)
        //SI LO ENCUENTRO ENTONCES ITEM.TITLE VA ASER IGUAL AL NUEVO VALOR
        item.title = value
        // POR ULTIMO ESPECIFICAMOS QUE SETTODOS  ES IGUAL TEMP
        setTodos(temp)



    }

    return (
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input 
                type="text"
                onChange={handleChange} 
                className="todoInput" 
                value={title} />
                <input
                    onClick={handleSubmit}
                    type="submit"
                    value="Crea todo"
                    className="buttonCreate"
                />
            </form>

            <div className="todosContainer">
                {
                    //map hace un recorrido de todo los elementos y regresar "jsx"
                    todos.map(item =>(
                       <Todo key={item.id} item={item} onUpdate={handleclick}></Todo>
                    ))
                }
            </div>
        </div>
    );
}
