import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './carousel.module.css';
import { Carousel } from 'react-responsive-carousel';
import image001 from '../../assets/images/carousel/image001.jpeg';
import image002 from '../../assets/images/carousel/image002.jpg';
import image003 from '../../assets/images/carousel/image003.jpg';

const Carouselpage = () => {
  return (
    <div className={styles.carousel}>
      <Carousel width={'100%'} autoPlay infiniteLoop centerMode centerSlidePercentage={30} showThumbs={false} showStatus={true}> 
        <div>
          <img src={image001}/>
        </div>
        <div>
          <img src={image002} />
        </div>
        <div>
          <img src={image001}/>
        </div>
        <div>
          <img src={image003} />
        </div>
        <div>
          <img src={image002} />
        </div>
      </Carousel>
    </div>
  );
};

export default Carouselpage;
