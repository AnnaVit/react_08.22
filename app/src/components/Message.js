import './styles/message.css';

export const Message = ({message, author}) => {

    return <>
        <p>{author}</p>
        <p>{message}</p>
    </>
}
