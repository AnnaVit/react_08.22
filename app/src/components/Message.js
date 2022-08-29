import './styles/message.css';

export const Message = ({message}) => {

    return(
        <input type="text" readOnly={message} value={message}/>
    );
}
