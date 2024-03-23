import './Header.css'

const Header = () => {
    return(
        <header className='Header'>
            <h1 style={{"backgroundColor":"red"}}>
                Hello World
            </h1>
            <p className='fix-text'>That's my website bitch</p>
            <ul className='list'>
                <li>Login</li>
                <li>Registrar</li>
                <li>Sobre</li>
            </ul>
        </header>
    )
}

export default Header;