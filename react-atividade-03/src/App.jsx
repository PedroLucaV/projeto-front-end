/* eslint-disable react/prop-types */
import './style.css'
import photo from './assets/images/avatar-pedro.jpg'

const Nome = (props) => {
    return (
        <h2>{props.children}</h2>
    )
}

const Location = (props) => {
    return (
        <h3 style={{ color: 'hsl(75, 94%, 57%)' }}>{props.children}</h3>
    )
}

const Phrase = (props) => {
    return (
        <p>{props.children}</p>
    )
}

const App = () => {
    return (
        <>
            <div className="main">
                <div className="personal-info">
                    <span className='image'>
                        <img src={photo} alt='Foto de perfil' />
                    </span>
                    <Nome>{`Pedro Lucas`}</Nome>
                    <Location>{`Maceió, AL`}</Location>
                    <Phrase>{`Young Programming Student`}</Phrase>
                </div>
                <form action="" className='form'>
                    <a href="https://github.com/PedroLucaV" className='button'><input className='button' type="button" value="Github"/></a>
                    <a href="https://www.frontendmentor.io/profile/PedroLucaV" className='button'><input className='button' type="button" value="Frontend Mentor" /></a>
                    <a href="https://www.linkedin.com/in/pedro-lucas-09b504301/" className='button'><input className='button' type="button" value="Linkedin" /></a>
                    <a href="https://twitter.com/PedroLu98465537" className='button'><input className='button' type="button" value="Twitter" /></a>
                    <a href="https://www.instagram.com/pl_allwisdom?igsh=MXM3eHBuZDQ2dXdlaw==" className='button'><input className='button' type="button" value="Instagram" /></a>
                </form>
            </div>
        </>
    )
}

export default App