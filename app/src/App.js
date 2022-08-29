import './App.css';
import {Message} from "./components/Message";
import {useState} from "react";

function App() {

    const [messages, setMessages] = useState([
        'сообщение 1',
        'сообщение 2',
        'сообщение 3',
    ]);

  return (

    <div className="App">
        {messages.map((message,index) =>
            <Message key={index} message={message}/>
        )}
    </div>
  );
}

export default App;
