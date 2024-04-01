import './style.css'
const App = () => {
    return(
        <>
            <div className="main">
                <div className="personal-Info">
                        <p>Pedro Lucas</p>
                        <p className='location'>Maceio, Al</p>
                </div>
                <form action="" className='form'>
                        <input type="button" value="Github"/>
                        <input type="button" value="Frontend Mentor"/>
                        <input type="button" value="Linkedin"/>
                        <input type="button" value="Twitter"/>
                        <input type="button" value="Instagram"/>
                </form>
            </div>
        </>
    )
}

export default App