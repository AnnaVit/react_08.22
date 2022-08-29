import './App.css';
import {Message} from "./components/Message";
import {useEffect, useState} from "react";

function App() {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMassage = (e) => {
        e.preventDefault();
        let name = 'MyName';
        setMessages([...messages, {name: name , message: ' ' + newMessage}]);
        setNewMessage(' ');
    }

    const handleChange = (event) => {
        setNewMessage(event.target.value);
    }

    const botMessage = () => {
        let name = 'Bot';
        let message = 'Bot message';
        setMessages([...messages, {name: name , message: ' ' + message}]);

    }

    useEffect(() => {
        if(messages.length !== 0 && messages[messages.length - 1].name !== 'Bot') {
            botMessage();
        }

    }, [messages]);

    return <div className="App">
        {messages.map((message,index) =>
            <Message key={index} author={message.name}  message={message.message} />
        )}

      <form onSubmit={handleSendMassage}>
          <input type="text" onChange={handleChange} value={newMessage}/>
          <button>Send message</button>
      </form>
    </div>
}

export default App;
