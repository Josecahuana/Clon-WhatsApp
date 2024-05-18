import comunityImg from './img/comunityImg.png'
import './Comunity.css'

export const Comunity = () => {
    return (
        <>
            <header className='contact__header'>
                <h2>Comunidades</h2>
            </header>
            <main className='comunity__main'>
                <img src={comunityImg} alt="Img whatsApp comunity" />
                <h3>Crea una comunidad para mantenerte en contacto</h3>
                <p>Las comunidades reúnen a los miembros en grupos por temas y facilitan la recepción de avisos de los administradores. Cualquier comunidad a la que te añadan aparecerá aquí.</p>
                <span>
                    <a href="#">Ver ejemplos de comunidades</a>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1ad59d"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                </span>
            </main>
            <button className='comunity__button' type='button'>Iniciar tu comunidad</button>
        </>
    )
}

