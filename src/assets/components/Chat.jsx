export const Chat = ({ chatHeader, chatSearch, chatMenu, elNoob, mariaLopez, personChat, groupChat, women, pelon }) => {
    const chats = [
        {
            foto: pelon,
            nombre: 'El noob',
            ultimoComentario: 'Me ayudas a lvl pls :c',
            fechaUltimoComentario: 'Lunes'
        },
        {
            foto: mariaLopez,
            nombre: 'María López',
            ultimoComentario: 'Nos vemos mañana.',
            fechaUltimoComentario: 'Martes'
        },
        {
            foto: personChat,
            nombre: '+1234567890',
            ultimoComentario: 'Llámame cuando puedas.',
            fechaUltimoComentario: '2024-05-15'
        },
        {
            foto: groupChat,
            nombre: 'Grupo de Estudio',
            ultimoComentario: '¿Quién puede traer los libros?',
            fechaUltimoComentario: '2024-05-15'
        },
        {
            foto: elNoob,
            nombre: 'Carlos Martínez',
            ultimoComentario: 'Te envié el documento.',
            fechaUltimoComentario: '2024-05-15'
        },
        {
            foto: women,
            nombre: 'Laura Gómez',
            ultimoComentario: 'Gracias por la ayuda.',
            fechaUltimoComentario: '14:20'
        },
        {
            foto: groupChat,
            nombre: 'Familia',
            ultimoComentario: 'La cena está lista.',
            fechaUltimoComentario: '2024-05-15'
        },
        {
            foto: personChat,
            nombre: '+0987654321',
            ultimoComentario: '¿Dónde estás?',
            fechaUltimoComentario: '2024-05-15'
        },
        {
            foto: personChat,
            nombre: 'Amigos de la Universidad',
            ultimoComentario: '¿Vamos al cine el viernes?',
            fechaUltimoComentario: '2024-05-15'
        },
        {
            foto: women,
            nombre: 'Ana Fernández',
            ultimoComentario: 'Nos vemos luego.',
            fechaUltimoComentario: '2024-05-15'
        }
    ];


    return (
        <>
            <header className="contact__header">
                <h2 className="header__h2">Chats</h2>
                <div className="header__img">
                    <img className="img__chat" src={chatHeader} />
                    <img className="img__menu" src={chatMenu} />
                </div>
            </header>
            <div className="contact__search">
                <img className="search__img" src={chatSearch} />
                <input className="search__input" type="text" placeholder="Buscar" />
            </div>
            <div className="buttons">
                <button className="buttons__btn-active" type="button">Todos</button>
                <button className="buttons__btn" type="button">No leidos</button>
                <button className="buttons__btn" type="button">Grupos</button>
            </div>
            <div className="contact__chat">
                {chats.map((chat) => {
                    return (
                        <article className="chat__friend">
                            <img className="chat__photo" src={chat.foto} alt={`Foto perfil ${chat.nombre}`} />
                            <div className="chat__content">
                                <div className="content__comment">
                                    <h3 className="commnet__name">{chat.nombre}</h3>
                                    <span className="comment__date">{chat.fechaUltimoComentario}</span>
                                </div>
                                <p className="comment__message">{chat.ultimoComentario}</p>
                            </div>

                        </article>
                    )
                })}
            </div>
        </>
    )
}

