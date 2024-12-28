import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typography } from "../../components";

const Home: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Typography>Bem-vindo à Página Inicial</Typography>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4} lg={3}>
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagem" />
            <div className="card-body">
              <p className="card-text">Descrição do card</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
