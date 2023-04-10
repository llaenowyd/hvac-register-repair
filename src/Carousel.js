import Slider from 'react-slick';

import classes from './Carousel.module.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  '230321_1_plan.jpg',
  '230322_1_prep.jpg',
  '230409_1_vacuum.jpg',
  '230409_2_vacuum.jpg',
  '230409_3_brush.jpg',
  '230409_4_wipe.jpg',
  '230409_5_wipe.jpg',
  '230409_6_wipe.jpg',
  '230409_7_precise_fit.jpg',
  '230409_8_precise_fit.jpg',
  '230409_9_placed.jpg',
  '230409_a_obstructive_shelf.jpg',
].map(imageName => `content/${imageName}`)

// <div key={path} className={classes.imageContainer}>
// </div>
function Carousel() {
  return (
    <Slider className={classes.imageContainer} dots infinite speed={500} slidesToShow={1} slidesToScroll={1} arrows={false}>
        {
        images.map(path => (
            <img key={path} className={classes.image} src={path} />
        ))
        }
    </Slider>
  );
}

export default Carousel;
