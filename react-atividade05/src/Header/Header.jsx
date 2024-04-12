import star from '../assets/images/icon-star.svg'

const Header = () => {
    return (
        <>
            <span className='Header'>
                <img src={star} alt="star" />
                <h1>FAQs</h1>
            </span>
        </>
    )
}

export default Header;