const ContainerModal = ({title, text, image}) => {
    const class1 = title;
    const class2 = 'containerB';
    return (
        <>
            <div className={class1 + ' ' + class2}>
                <img src={image} alt={"S"} />
                <h1 className="Title">{title}</h1>
                <p className="Text">{text}</p>
                <button>Learn More</button>
            </div>
        </>
    )
}

export default ContainerModal;