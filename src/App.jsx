import chanel from './assets/chanel.svg'
import chat from './assets/chat.svg'
import comunity from './assets/comunity.svg'
import settings from './assets/settings.svg'
import states from './assets/states.svg'
import users from './assets/users.svg'
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
import { Chat } from './assets/components/Chat'
import { Settings } from './assets/components/Settings'
import { Comunity } from './assets/components/Comunity'
import { States } from './assets/components/States'
import { Chanel } from './assets/components/Chanel'
import { Perfil } from './assets/components/Perfil'

import './App.css'
import { useState } from 'react'

const data = {
  chats: true,
  comunidades: false,
  estados: false,
  canales: false,
  configuracion: false,
  perfil: false,
}

export const App = () => {

  const [option, setOptions] = useState(data);

  const handleClick = (value) => {
    setOptions(
      {
        chats: false,
        comunidades: false,
        estados: false,
        canales: false,
        configuracion: false,
        perfil: false,
        [value]: true
      }
    )
  }

  return (
    <>
      <section className="container__menu">
        <div className="menu__state">
          <div className='state__message'>
            <img src={chat} onClick={() => handleClick('chats')} />
            <span>3</span>
          </div>
          <img src={comunity} onClick={() => handleClick('comunidades')} />
          <img src={states} onClick={() => handleClick('estados')} />
          <img src={chanel} onClick={() => handleClick('canales')} />
        </div>
        <div className="menu__configure">
          <div>
            <img src={settings} onClick={() => handleClick('configuracion')} />
          </div>
          <img src={users} onClick={() => handleClick('perfil')} />
        </div>
      </section>
      <section className="container__contact">
        {option.chats &&
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
        }
        {option.comunidades && <Comunity />}
        {option.estados &&
          <States
            pelon={pelon}
            mariaLopez={mariaLopez}
            women={women}
          />
        }
        {option.canales && <Chanel />}
        {
          option.configuracion &&
          <Settings
            value=''
            chatSearch={chatSearch}
          />
        }
        {
          option.perfil && <Perfil />
        }


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

