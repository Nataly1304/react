import react, {useState} from 'react';
import "../mensaje.css"
const Footer = ({ text })=>{
    const[showFooter, setSthowFooter]= useState(false);
    const handleClick = () => {
        setSthowFooter(!showFooter);
    };
    return (
        <footer>
            <h3>Footer</h3>
            <button onClick={handleClick}>Mostrar/Ocultar</button>
            {showFooter && <p className='footermensaje'>{text}</p>}
        </footer>
    );
}


export default Footer;