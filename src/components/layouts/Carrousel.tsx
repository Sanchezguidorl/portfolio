import logoJava from '../../assets/images/skillsLogos/java-logo.png';
import logoJs from '../../assets/images/skillsLogos/js-logo.png';
import logoPhp from '../../assets/images/skillsLogos/php-logo.png';
import logoNode from '../../assets/images/skillsLogos/node-logo.png';
import logoSass from '../../assets/images/skillsLogos/sass-logo.png';
import logoReact from '../../assets/images/skillsLogos/react-logo.png';
import logoBootstrap from '../../assets/images/skillsLogos/bootstrap-logo.png';
import logoTs from '../../assets/images/skillsLogos/ts-logo.png';
import { Carousel } from 'react-bootstrap';

function Carrousel() {
    const logos=[logoJava,logoBootstrap,logoJs,logoNode,logoPhp,logoReact,logoTs,logoSass];

    return (
        <Carousel className='maxwidht' controls={false} indicators={false} interval={4000}>
{
    logos.map((image,index)=>
        <Carousel.Item key={index}>
          <img src={image} alt={image} className='w-100 carrouselTransition'/>
        </Carousel.Item>
    )
}
</Carousel>
);
}

export default Carrousel
