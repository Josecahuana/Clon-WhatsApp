import libero from './img/libero.png'
import americatv from './img/americatv.png'
import barcelona from './img/barcelona.jpg'
import bolavip from './img/bolavip.png'
import juegagerman from './img/juegagerman.jpg'
import latinanoticias from './img/latinanoticias.png'
import latina from './img/latina.jpg'
import netflix from './img/netflix.png'
import whatsapp from './img/whatsapp.png'

import './Chanel.css'
export const Chanel = () => {

    const dataChanel = [
        {
            id: 1,
            nombreEmpresa: "Tech Innovators",
            logo: libero
        },
        {
            id: 2,
            nombreEmpresa: "Green Solutions",
            logo: americatv
        },
        {
            id: 3,
            nombreEmpresa: "Finance Experts",
            logo: barcelona
        },
        {
            id: 4,
            nombreEmpresa: "Health & Wellness",
            logo: bolavip
        },
        {
            id: 5,
            nombreEmpresa: "EduTech",
            logo: juegagerman
        },
        {
            id: 6,
            nombreEmpresa: "Travel Gurus",
            logo: latinanoticias
        },
        {
            id: 7,
            nombreEmpresa: "Foodies Paradise",
            logo: latina
        },
        {
            id: 8,
            nombreEmpresa: "Fashion Forward",
            logo: netflix
        },
        {
            id: 9,
            nombreEmpresa: "AutoMasters",
            logo: whatsapp
        }
    ];


    return (
        <>
            <header className="contact__header">
                <h2>Canales</h2>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                </span>
            </header>
            <div className="chanel__parraph">
                <p>Conoce las últimas novedades de los temas que te interesan</p>
                <span>A continuación, busca canales para seguir.</span>
            </div>
            <main className='chanel__main'>
                {
                    dataChanel.map((data) => {
                        return (
                            <div className='data__container' key={data.id}>
                                <header>
                                    <img src={data.logo} alt={`Image of ${data.nombreEmpresa}`} />
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1ad59d"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg>
                                    </span>
                                </header>
                                <p>{data.nombreEmpresa}</p>
                                <a href="#">Seguir</a>
                            </div>
                        )
                    })
                }
            </main>
            <button type='button' className='main__button'>Buscar canales</button>
        </>
    )
}
