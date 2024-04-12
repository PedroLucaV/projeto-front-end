const Button = ({nome, modal, setModal}) => {
    return (
        <>
            <button className="Button" onClick={() => setModal(!modal)}>{nome}</button>
        </>
    )
}

export default Button;