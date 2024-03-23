import './Header.css'
import logo from '../imgs/cat-1.png'

const Header = () => {
    return (
        <>
            <header>
                <a href="#"><img src={logo}/></a>
                <div class="login-buttons">
                    <a href="#">
                        <p>Login</p>
                    </a>
                    <a href="#">
                        <p>Register</p>
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header;