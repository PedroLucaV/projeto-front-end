import './Main.css'
import img1 from '../imgs/img-01.png'
import img2 from '../imgs/img-02.png'
import img3 from '../imgs/img-03.png'
import img4 from '../imgs/img-04.png'
import img5 from '../imgs/img-05.png'
import img6 from '../imgs/img-06.png'
import img7 from '../imgs/img-07.png'
import img8 from '../imgs/img-08.png'
import img9 from '../imgs/img-09.png'
import img10 from  '../imgs/img-10.png'
import img11 from  '../imgs/img-11.png'
import img12 from  '../imgs/img-12.png'

const MainP = () => {
    return(
        <div class="container">
            <div class="three-images">
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
            </div>

            <div class="two-images">
                <img src={img4} />
                <img src={img5} />
            </div>

            <div class="one-image">
                <img src={img6} />
            </div>

            <div class="three-images">
                <img src={img7} />
                <img src={img8} />
                <img src={img9} />
            </div>

            <div class="two-images">
                <img src={img10} />
                <img src={img11} />
            </div>

            <div class="one-image">
                <img src={img12} />
            </div>
        </div>
    )
}

export default MainP;