import { useContext } from 'react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Container, Image, SwipperStyled } from './styled';
import { SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';
import GlobalContext from '../../Contexts/GlobalContext';
register();

const Carousel = () => {

    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.2, });

    const Globaldata = useContext(GlobalContext);
    if (!Globaldata.data) {
        return <div>Carregando...</div>;
      }

    return (
        <Container ref={ref}>
            <SwipperStyled
                className={inView ? 'visible' : ''}
                slidesPerView={4}
            >
                {Globaldata.data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Image
                            src={item.image}
                            alt="Slider"
                        />
                    </SwiperSlide>
                ))}
            </SwipperStyled>
        </Container>
    );
}

export default Carousel;
