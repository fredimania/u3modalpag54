/* importante use client */
'use client'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Link from 'next/link';

function CarouselFadeExample() {
  return (
    <div style={{width:500, height:450}}>
    <Carousel fade>
      <Carousel.Item>
        <Image src="https://t3.ftcdn.net/jpg/02/48/54/30/360_F_248543017_qg21vktvFRHXWIV54pqIGZ26uSpX0qgg.jpg" width="500" height="450" alt="Almería" unoptimized="true" />
        <Carousel.Caption>
          <h3>ALMERIA</h3>
          <Link href="/andalucia/almeria"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <Image src="https://www.spain.info/.content/imagenes/cabeceras-grandes/andalucia/alhambra-granada-20044065-istock.jpg" width="500" height="450" alt="Almería" unoptimized="true" />
        <Carousel.Caption>
          <h3>GRANADA</h3>
          <Link href="/andalucia/granada"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Image src="https://cdn.pixabay.com/photo/2020/05/12/18/29/city-5164368_1280.jpg" width="500" height="450" alt="Granada" unoptimized="true" />
        <Carousel.Caption>
        <h3>SEVILLA</h3>
          <Link href="/andalucia/sevilla"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Image src="https://www.cadizturismo.com/storage/app/media/uploaded-files/p-cadiz_turismo.jpg" width="500" height="450" alt="Sevilla" unoptimized="true" />
        <Carousel.Caption>
        <h3>CADIZ</h3>
          <Link href="/andalucia/cadiz"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <Image src="https://elevateyourescapes.com/wp-content/uploads/2024/01/Malaga.jpg" width="500" height="450" alt="Cadiz" unoptimized="true" />
        <Carousel.Caption>
        <h3>MALAGA</h3>
          <Link href="/andalucia/malaga"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Image src="https://fthmb.tqn.com/EERktuUchmn0vZo1s7LPMi0v4GU=/2121x1414/filters:fill(auto,1)/GettyImages-519894407-592a43145f9b585950a5dfec.jpg" width="500" height="450" alt="Cadiz" unoptimized="true" />
        <Carousel.Caption>
        <h3>CORDOBA</h3>
          <Link href="/andalucia/cordoba"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Image src="https://espanaviajar.com/wp-content/uploads/2020/06/Catedral-de-la-Merced-de-Huelva.jpg" width="500" height="450" alt="Cadiz" unoptimized="true" />
        <Carousel.Caption>
        <h3>HUELVA</h3>
          <Link href="/andalucia/huelva"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <Image src="https://astelus.com/wp-content/viajes/vista-aerea-de-jaen-en-espana.jpg" width="500" height="450" alt="Cadiz" unoptimized="true" />
        <Carousel.Caption>
        <h3>JAEN</h3>
          <Link href="/andalucia/jaen"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;