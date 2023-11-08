import { Card, Container, Googlerev, Image, SubText, SwipperStyled, Text } from './styled';
import GlobalContext  from '../../Contexts/GlobalContext';
import { useInView } from 'react-intersection-observer';
import { register } from 'swiper/element/bundle';
import { SwiperSlide } from 'swiper/react';
import { useContext } from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
register();

const GooglePlacesReviews = () => {

    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.2, });
    const Globaldata  = useContext(GlobalContext);
    if (!Globaldata.reviews) {
        return <div>Carregando...</div>;
      }

    return (
        <Container ref={ref}>
            <Googlerev>Google Reviews.</Googlerev>
            <SwipperStyled
                className={inView ? 'visible' : ''}
                slidesPerView={4}
                pagination={{ clickable: true }}
            >
                {Globaldata.reviews.map((item) => (
                    <SwiperSlide 
                    className={inView ? 'visible' : ''}
                    key={item.id}>
                        <Card
                        className={inView ? 'visible' : ''}
                        >
                        <Image
                            className={inView ? 'visible' : ''}
                            src={item.image}
                            alt="Slider"
                        />
                        <Text
                        >{item.comment}</Text>
                        <SubText
                        className={inView ? 'visible' : ''}
                        >{item.name}</SubText>
                        </Card>
                    </SwiperSlide>
                ))}
            </SwipperStyled>
        </Container>
    );
}

export default GooglePlacesReviews;