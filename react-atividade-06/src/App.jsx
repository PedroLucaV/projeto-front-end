import Container from './Container/Container';
import Sedan from './assets/images/icon-sedans.svg'
import Suvs from './assets/images/icon-suvs.svg'
import Luxury from './assets/images/icon-luxury.svg'
import ContainerModal from './ContainerModal';
import './style.css'

const App = () => {
  return (
    <>
      <Container>
        <ContainerModal image={Sedan} title={"Sedan"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices vitae."}/>
        <ContainerModal image={Suvs} title={"Suvs"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices vitae."}/>
        <ContainerModal image={Luxury} title={"Luxury"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices vitae."}/>
      </Container>
    </>
  )
}

export default App;