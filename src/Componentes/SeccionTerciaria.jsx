import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import Image1 from '../assets/thecure12.webp';
import Image2 from '../assets/thecure1.webp';
import Image3 from '../assets/thecure3.webp';
import Image4 from '../assets/thecure4.webp';
import Image5 from '../assets/thecure5.webp';
import Image6 from '../assets/thecure6.webp';
import Image7 from '../assets/thecure7.webp';
import Image8 from '../assets/thecure8.webp';
import Image9 from '../assets/thecure9.webp';
import Image10 from '../assets/thecure10.webp';

function SeccionTerciaria() {
  // Array de objetos, cada uno representando una tarjeta con imagen
  const cards = [
    { id: 1, imageUrl: Image1, title: 'Disintegración', description: 'El álbum más emblemático de The Cure.' },
    { id: 2, imageUrl: Image2, title: 'Robert Smith', description: 'El líder de la banda y su influencia en la música.' },
    { id: 3, imageUrl: Image3, title: 'Goth Rock', description: 'El género musical que definió la estética de The Cure.' },
    { id: 4, imageUrl: Image4, title: 'Conciertos', description: 'Experiencias inolvidables en vivo con The Cure.' },
    { id: 5, imageUrl: Image5, title: 'Influencias', description: 'Las bandas que inspiraron a The Cure.' },
    { id: 6, imageUrl: Image6, title: 'Curiosidades', description: 'Datos interesantes y poco conocidos sobre la banda.' },
    { id: 7, imageUrl: Image7, title: 'Robert Smith', description: 'El estilo icónico y reconocible del líder de la banda.' },
    { id: 8, imageUrl: Image8, title: 'Discografía', description: 'Explora la extensa lista de álbumes de The Cure.' },
    { id: 9, imageUrl: Image9, title: 'Videos Musicales', description: 'Los videoclips más emblemáticos de The Cure.' },
    { id: 10, imageUrl: Image10, title: 'The Cure en Vivo', description: 'Conciertos y presentaciones en directo de la banda.' }
  ];
  return (
    <Container className='mb-5 mt-5'>
      <Row xs={1} md={2} lg={3} xl={4} xxl={5}> {/* Define el número de tarjetas por fila en diferentes tamaños de pantalla */}
        {cards.map(card => (
          <Col key={card.id}>
            <Card className='mt-2 mb-5'>
              <Card.Img variant="top" src={card.imageUrl} className='img-fluid' alt={card.title} />
              <Card.Body>
                <Card.Title className='subtitle'>{card.title}</Card.Title>
                <Card.Text className='text'>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SeccionTerciaria;
