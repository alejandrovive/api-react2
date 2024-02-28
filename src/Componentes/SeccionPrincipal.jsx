import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import heroImage200w from '../assets/TheCure2_abbbm4_c_scale,w_200.webp';
import heroImage569w from '../assets/TheCure2_abbbm4_c_scale,w_569.webp';
import heroImage883w from '../assets/TheCure2_abbbm4_c_scale,w_883.webp';
import heroImage951w from '../assets/TheCure2_abbbm4_c_scale,w_951.webp';
import heroImage1103w from '../assets/TheCure2_abbbm4_c_scale,w_1103.webp';
import heroImage1351w from '../assets/TheCure2_abbbm4_c_scale,w_1351.webp';
import heroImage1359w from '../assets/TheCure2_abbbm4_c_scale,w_1359.webp';
import heroImage1400w from '../assets/TheCure2_abbbm4_c_scale,w_1400.webp';


function SeccionPrincipal() {
  return (
    <main>
        <section className="hero">
        <Container>
            <Row>
                <Col>
                    <header>
                        <Container className="hero-content text-center mt-3">
                            <h1 className='title'>The Cure</h1>
                            <p className='text'>Descubre el mundo de The Cure, una legendaria banda de rock.</p>
                        </Container>
                    </header>  
                </Col>
            </Row>
            <Container className="hero-image-container d-flex justify-content-center">
            <Image 
                src={heroImage1400w}
                srcSet={`${heroImage200w} 200w, 
                        ${heroImage569w} 569w, 
                        ${heroImage883w} 883w, 
                        ${heroImage951w} 951w, 
                        ${heroImage1103w} 1103w, 
                        ${heroImage1351w} 1351w, 
                        ${heroImage1359w} 1359w, 
                        ${heroImage1400w} 1400w`}
                sizes="(max-width: 1400px) 100vw, 1400px"
                alt="Imagen grupo The Cure completo"
                />
            </Container>
        </Container>
        </section>
    </main>
  );
}

export default SeccionPrincipal;

