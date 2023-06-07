import react, {useState} from 'react';
import "../mensaje.css"
const Messagge = ({ text })=>{
    const[showMessagge, setSthowMessagge]= useState(false);
    const handleClick = () => {
        setSthowMessagge(!showMessagge);
    };
    return (
        <div>
            <button onClick={handleClick}>Mostrar/Ocultar</button>
            {showMessagge && <p className='mensaje'>{text}</p>}
        </div>
    );
}


export default Messagge;