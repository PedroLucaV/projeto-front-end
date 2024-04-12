import './style.css';
import Container from './Container/Container';
import Header from './Header/Header.jsx';
import ContainerModal from './ContainerModal/ContainerModal';

const App = () => {
    
    return (
        <>
            <Container>
                <Header />
                <ContainerModal TextModal={"S"} TextBtn={"eu"}/>
                <ContainerModal TextModal={"uc"} TextBtn={"não"}/>
                <ContainerModal TextModal={"m"} TextBtn={"sei"}/>
                <ContainerModal TextModal={"ba"} TextBtn={"oq"}/>
            </Container>
        </>
    )
}

export default App;