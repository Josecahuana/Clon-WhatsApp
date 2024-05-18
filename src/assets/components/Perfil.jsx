import './Perfil.css'
import personNew from './img/personNew.svg'
export const Perfil = () => {
    return (
        <>
            <header className='contact__header'>
                <h2>Perfil</h2>
            </header>
            <main className="perfil__main">
                <div className="main__img">
                    <img src={personNew} alt="" />
                    <div className='img__photo'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Z" /></svg>
                        </span>
                        <p>AÑADIR UNA FOTO AL PERFIL</p>
                    </div>
                </div>
                <div className="main__name">
                    <p>Tu nombre</p>
                    <div className="perfil__span">
                        <span>José Luis</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8696A0">
                                <path d="M120-120v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm584-528 56-56-56-56-56 56 56 56Z" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="main__info">
                    <span>
                        Este no es tu nombre de usuario o PIN. Este nombre será visible para tus contactos de WhatsApp.
                    </span>
                </div>
                <div className='main__name'>
                    <p>Info</p>
                    <div className="perfil__span">
                        <span>Ocupado</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8696A0">
                            <path d="M120-120v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm584-528 56-56-56-56-56 56 56 56Z" />
                        </svg></span>
                    </div>
                </div>
            </main>
        </>
    )
}


