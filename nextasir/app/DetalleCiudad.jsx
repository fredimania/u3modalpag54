'use client'
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/* detalles de cada ciudad, saber mas*/
function DetalleProvincia({nombre}){
    if(nombre==="almeria"){
        return (<>
        <h4> Ciudad de {nombre}</h4>
        <Image src="https://t3.ftcdn.net/jpg/02/48/54/30/360_F_248543017_qg21vktvFRHXWIV54pqIGZ26uSpX0qgg.jpg" unoptimized="true" width="500" height="450" alt={nombre} />
        </>)
    }
    else if(nombre==="granada"){
        return (<>
        <h4> Ciudad de {nombre}</h4>
        <Image src="https://www.spain.info/export/sites/segtur/.content/images/galerias/alhambra/alhambra-granada-shutterstock_158639000.jpg" unoptimized="true" width="500" height="450" alt={nombre} />
        </>)
    }
    else if(nombre==="malaga"){
        return (<>
        <h4> Ciudad de {nombre}</h4>
        <Image src="https://elevateyourescapes.com/wp-content/uploads/2024/01/Malaga.jpg" width="500" height="450" alt={nombre} unoptimized="true" />
        </>)
    }
    else if(nombre==="cadiz"){
        return (<>
        <h4> Ciudad de {nombre}</h4>
        <Image src="https://www.cadizturismo.com/storage/app/media/uploaded-files/p-cadiz_turismo.jpg" unoptimized="true" width="500" height="450" alt={nombre} />
        </>)
    }
    else if(nombre==="sevilla"){
        return (<>
        <h4> Ciudad de {nombre}</h4>
        <Image src="https://cdn.pixabay.com/photo/2020/05/12/18/29/city-5164368_1280.jpg" unoptimized="true" width="500" height="450" alt={nombre} />
        </>)
    }
    
    else if(nombre==="cadiz"){
        return (<>
        <h4> Ciudad de {nombre}</h4>
        <Image src="https://www.cadizturismo.com/storage/app/media/uploaded-files/p-cadiz_turismo.jpg" unoptimized="true" width="500" height="450" alt={nombre} />
        </>)
  }

  else if(nombre==="malaga"){
        return (<>
        <h4> Ciudad de {nombre}</h4>
        <Image src="https://elevateyourescapes.com/wp-content/uploads/2024/01/Malaga.jpg" unoptimized="true" width="500" height="450" alt={nombre} />
        </>)
}

else if(nombre==="cordoba"){
      return (<>
      <h4> Ciudad de {nombre}</h4>
      <Image src="https://fthmb.tqn.com/EERktuUchmn0vZo1s7LPMi0v4GU=/2121x1414/filters:fill(auto,1)/GettyImages-519894407-592a43145f9b585950a5dfec.jpg" unoptimized="true" width="500" height="450" alt={nombre} />
       </>)
}

else if(nombre==="huelva"){
  return (<>
  <h4> Ciudad de {nombre}</h4>
  <Image src="https://espanaviajar.com/wp-content/uploads/2020/06/Catedral-de-la-Merced-de-Huelva.jpg" unoptimized="true" width="500" height="450" alt={nombre} />
   </>)
}

else if(nombre==="jaen"){
  return (<>
  <h4> Ciudad de {nombre}</h4>
  <Image src="https://astelus.com/wp-content/viajes/vista-aerea-de-jaen-en-espana.jpg" unoptimized="true" width="500" height="450" alt={nombre} />
   </>)
}

    else{
        return notFound();
    }
    
}

 function Example({nombre}) {
  
  const [show, setShow] = useState(false);
   useEffect(() => {
       setShow(true)
     }, [])
  const handleClose = () => redirect("/andalucia");
  const handleShow = () => setShow(true);

  return (
    <>
    
      <Modal show={show} size="lg"  onHide={handleClose} animation={false}>

        
        <Modal.Header closeButton>
          <Modal.Title>informacion de la Ciudad: {nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{DetalleProvincia({nombre})}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;