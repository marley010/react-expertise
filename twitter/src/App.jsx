import './App.css'
import CreateMessage from './components/CreateMessage'
import MessageList from './components/MessageList'

function App() {
let name = "test";
let message = "dit is weer het eerste bericht"


  return (
    <>
<CreateMessage />
<MessageList name={name} message={message}/>
    </>
  )
}

export default App
