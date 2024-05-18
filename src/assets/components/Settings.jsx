import person from './img/person.svg'
import chatMessage from './img/chatMessage.svg'
import circlePerson from './img/circlePerson.svg'
import help from './img/help.svg'
import logout from './img/logout.svg'
import notification from './img/notification.svg'
import privacy from './img/privacy.svg'
import settingShort from './img/settingShort.svg'

import './Settings.css'

export const Settings = ({ chatSearch }) => {
    return (
        <>
            <header className='contact__header'>
            <h2 className='setting__h2'>Configuración</h2>
            </header>
            <div className="contact__search">
                <img className="search__img" src={chatSearch} />
                <input className="search__input" type="text" placeholder="Buscar en configuración" />
            </div>
            <section className="configure__profile">
                <img className='configure__img' src={person} alt="" />
                <div className='configure__perfil'>
                    <h3>José Luis</h3>
                    <p>Ocupado</p>
                </div>
            </section>
            <section className="configure__section">
                <div>
                    <img src={circlePerson} alt="Img of chat-whatsapp" />
                    <h4>Cuenta</h4>
                </div>
                <div>
                    <img src={privacy} alt="Img of chat-whatsapp" />
                    <h4>Privacidad</h4>
                </div>
                <div>
                    <img src={chatMessage} alt="Img of chat-whatsapp" />
                    <h4>Chats</h4>
                </div>
                <div>
                    <img src={notification} alt="Img of chat-whatsapp" />
                    <h4>Notificaciones</h4>
                </div>
                <div>
                    <img src={settingShort} alt="Img of chat-whatsapp" />
                    <h4>Atajos del teclado</h4>
                </div>
                <div>
                    <img src={help} alt="Img of chat-whatsapp" />
                    <h4>Ayuda</h4>
                </div>
                <div>
                    <img src={logout} alt="Img of chat-whatsapp" />
                    <h4 className='logout__text'>Cerrar sesión</h4>
                </div>
            </section>
        </>
    )
}

