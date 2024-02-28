import { Container, Row, Col } from 'react-bootstrap';

function SeccionSecundaria() {
  return (
    <section className="secondary-section">
      <Container>
        <Row>
          <Col>
            <article className="secondary-content text-center mt-3">
              <h2 className='subtitle'>Historia de The Cure</h2>
              <Container className='text'>
                <p>
                    The Cure es una banda británica formada en Crawley, Sussex del Este, en 1976. 
                    Su formación inicial se mantuvo estable durante la mayor parte de su historia, 
                    con Robert Smith (voz y guitarra), Simon Gallup (bajo), Porl Thompson (guitarra), 
                    Boris Williams (batería) y Lol Tolhurst (teclados). La banda ha experimentado varios 
                    cambios en la alineación, con Smith siendo el único miembro constante.
                </p>
                <p>
                    El estilo musical de The Cure ha evolucionado a lo largo de los años, 
                    abarcando diversos géneros que van desde el post-punk y el new wave hasta 
                    el rock alternativo y la música electrónica. Han sido una influencia importante 
                    en la escena musical alternativa y han ganado una base de seguidores leales 
                    en todo el mundo.
                </p>
              </Container>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SeccionSecundaria;
