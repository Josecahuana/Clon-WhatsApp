import person from './img/person.svg'
import './States.css'

export const States = ({ pelon, mariaLopez, women }) => {

    const statesGroup = [
        {
            id: 1,
            foto: pelon,
            nombre: 'El noob',
            fechaUltimoComentario: 'Lunes'
        },
        {
            id: 2,
            foto: mariaLopez,
            nombre: 'María López',
            fechaUltimoComentario: 'Martes'
        },
        {
            id: 3,
            foto: women,
            nombre: '+1234567890',
            fechaUltimoComentario: '2024-05-15'
        }
    ]


    return (
        <>
            <header className="contact__header">
                <h2>Estados</h2>
            </header>
            <section className="state__profile">
                <img className='configure__img' src={person} alt="" />
                <div>
                    <h3>Mi estado</h3>
                    <p>No hay actualizaciones</p>
                </div>
            </section>
            <span className='state__span'></span>

            <div className="contact__chat">
                <header className='state__recent'>RECIENTES</header>
                {statesGroup.map((chat) => {
                    return (
                        <article className="chat__friend" key={chat.id}>
                            <img className="chat__photo" src={chat.foto} alt={`Foto perfil ${chat.nombre}`} />
                            <div className="chat__content">
                                <div className="content__comment">
                                    <h3 className="commnet__name">{chat.nombre}</h3>
                                </div>
                                <p className="comment__message">{chat.fechaUltimoComentario}</p>
                            </div>

                        </article>
                    )
                })}
            </div>
        </>
    )
}
