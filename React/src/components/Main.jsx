import react, {useState} from 'react';
import "../mensaje.css"
const Main = ({ text })=>{
    const[showMain , setSthowMain ]= useState(false);
    const handleClick = () => {
        setSthowMain(!showMain );
    };
    return (
        <main>
            <h3>Main</h3>
            <button onClick={handleClick}>Mostrar/Ocultar</button>
            {showMain  && <p className='holamensaje'>{text}</p>}
        </main>
    );
}


export default Main ;