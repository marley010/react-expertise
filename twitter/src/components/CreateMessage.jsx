import { useState } from "react";

const CreateMessage = () => {
    const [textInput, setTextInput] = useState('');
    const [message, setMessage] = useState = ([])

const userInputHandler = (e) => {
    setTextInput(e.target.value)
}


}

    return (
       <form action="">
        <textarea cols="50" rows="5" onChange={userInputHandler}></textarea>
        <button>Toevoegen</button>
        <h1>{textInput}</h1>
       </form>
      );

 
export default CreateMessage;