import react, {useState} from 'react';
import "../mensaje.css"
const Header = ({ text })=>{
    const[showHeader, setSthowHeader]= useState(false);
    const handleClick = () => {
        setSthowHeader(!showHeader);
    };
    return (
        <header>
            <h3>Header</h3>
            <button onClick={handleClick}>Mostrar/Ocultar</button>
            {showHeader && <p className='headermensaje'>{text}</p>}
        </header>
    );
}


export default Header;