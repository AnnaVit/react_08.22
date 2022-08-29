import './App.css';
import {Message} from "./components/Message";
import {useState} from "react";

function App() {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMassage = (e) => {
        e.preventDefault();
        let name = 'MyName';
        setMessages([...messages, {name: name + ' :', message: ' ' + newMessage}]);
    }

    const handleChange = (event) => {
        setNewMessage(event.target.value);
    }

    return <div className="App">
        {messages.map((message,index) =>
            <Message key={index} author={message.name}  message={message.message} />
        )}

      <form onSubmit={handleSendMassage}>
          <input type="text" onChange={handleChange}/>
          <button>Send message</button>
      </form>
    </div>
}

export default App;
