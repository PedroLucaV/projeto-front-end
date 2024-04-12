import Modal from '../Modal/Modal';
import Button from '../ButtonModal/ButtonModal';
import React from 'react';

const ContainerModal = ({TextBtn, TextModal}) => {
    const [modal, setModal] = React.useState(false)
    return(
        <>
            <Button nome={TextBtn} setModal={setModal} modal={modal}/>
            <Modal text={TextModal} modal={modal}/>
        </>     
    )
}

export default ContainerModal;