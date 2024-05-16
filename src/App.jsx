import chanel from './assets/chanel.svg'
import chat from './assets/chat.svg'
import comunity from './assets/comunity.svg'
import settings from './assets/settings.svg'
import states from './assets/states.svg'
import users from './assets/users.svg'
import { Chat } from './assets/components/Chat'
import chatHeader from './assets/chatHeader.svg'
import chatSearch from './assets/chatSearch.svg'
import chatMenu from './assets/chatMenu.svg'
import wtsap from './assets/wtsp.png'

import elNoob from './assets/elNoob.jpg'
import mariaLopez from './assets/mariaLopez.jpg'
import personChat from './assets/personChat.svg'
import groupChat from './assets/groupChat.svg'
import women from './assets/women.jpg'
import pelon from './assets/pelon.jpg'

import './App.css'

export const App = () => {
  return (
    <>
      <section className="container__menu">
        <div className="menu__state">
          <div className='state__message'>
            <img src={chat} />
            <span>3</span>
          </div>
          <img src={comunity} />
          <img src={states} />
          <img src={chanel} />
        </div>
        <div className="menu__configure">
          <img src={settings} />
          <img src={users} />
        </div>
      </section>
      <section className="container__contact">
        <Chat
          chatHeader={chatHeader}
          chatSearch={chatSearch}
          chatMenu={chatMenu}
          elNoob={elNoob}
          mariaLopez={mariaLopez}
          personChat={personChat}
          groupChat={groupChat}
          women={women}
          pelon={pelon}
        />
      </section>
      <section className="container__data">
        <img className='data__logo' src={wtsap} />
        <h1>Descarga WhatsApp para Windows</h1>
        <p>Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida</p>
        <button type='button'>Descargar de Microsoft Store</button>

        <span>Tus mensajes personales están cifrados de extremo a extremo</span>
      </section>
    </>

  )
}

