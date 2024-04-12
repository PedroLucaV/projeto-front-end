const Modal = ({text, modal}) => {
    if(modal === true){
        return (
            <>
                <p className="Text">{text}</p>
            </>
        )
    }   
    return null;
}

export default Modal;