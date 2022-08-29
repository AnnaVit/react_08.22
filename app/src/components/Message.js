import './styles/message.css';

export const Message = ({message, author}) => {

    return <div className="message">
        <p>{author}</p>
        <p>{message}</p>
    </div>
}
