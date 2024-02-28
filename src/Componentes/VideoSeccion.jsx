import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import video1 from '../assets/video.mp4';
import video2 from '../assets/thecure.mp4';
function VideoSeccion() {
  return (
    <section className="main-section mt-5 mb-5">
      <Container>
        <Row>
          {/* Tarjeta con el video */}
          <Col md={6}>
            <Card className="video-card mb-5 mt-3">
              <Card.Body>
                <div className="video-container">
                  <video controls>
                    <source src={video1} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Tarjeta con la información del video */}
          <Col md={6}>
            <Card className="info-card mt-3">
              <Card.Body >
                <h2 className='title'>Friday I'm in Love</h2>
                <p className='text'>"Friday I’m in Love" es una de sus canciones más populares. 
                  Fue lanzada como el segundo sencillo de su noveno álbum de estudio, "Wish", en 1992. 
                  La canción se convirtió en uno de los mayores éxitos comerciales de la banda y es considerada 
                  uno de sus himnos más populares.</p>
                <h3 className='title'>Letra</h3>
                <p className='text'>La letra de "Friday I'm in Love" habla sobre el sentimiento de estar enamorado y cómo ese sentimiento puede iluminar el 
                  día de una persona, especialmente los viernes. La canción transmite una sensación de alegría y euforia, 
                  con letras optimistas que celebran el amor y la felicidad.</p>
                <p className='text'>El estilo musical de la canción combina elementos del pop y el rock alternativo, con un ritmo animado y pegadizo, guitarras brillantes y la distintiva voz de Robert Smith, líder de The Cure. La melodía pegajosa y la letra optimista han hecho de "Friday I'm in Love" 
                  una canción icónica que sigue siendo popular décadas después de su lanzamiento.</p>
                {/* Agrega aquí cualquier otra información que desees mostrar */}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Card className="info-card mt-2">
              <Card.Body>
                <h2 className='title'> The Cure - Live in Helsinki 2019 </h2>
                <p className='text'>La fantástica banda The Cure interpreta algunas de sus canciones en Helsinki, el 11 de agosto de 2019.</p>
                <h3 className='title'>Letras</h3>
                <p className='text'>
                "Push":La letra habla sobre los sentimientos de ansiedad y presión que pueden surgir en las relaciones interpersonales.
                </p>
                <p className='text'>
                  "In Between Days": La letra habla sobre el sentimiento de estar atrapado entre dos estados emocionales, como la felicidad y la tristeza, o la indecisión en una relación.
                </p>
                <p className='text'>
                "Just Like Heaven": La letra describe un encuentro romántico mágico y la sensación de estar enamorado, con imágenes evocadoras y poéticas.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="video-card mt-2 mb-5">
              <Card.Body>
                <div className="video-container">
                  <video controls>
                    <source src={video2} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default VideoSeccion;

