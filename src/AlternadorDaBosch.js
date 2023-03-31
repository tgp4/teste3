import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';

function AlternadorDaBosch() {
  var nextid = 0;

  var carrinho;
  if(localStorage.getItem("carrinho"))
  {
    carrinho = JSON.parse(localStorage.getItem("carrinho"));
  }
  else carrinho = [];

  return (
    <body className="">
      <div className=''></div>
      <p></p>
      <div>
        <Container>
          <Row>
            <Col>
              <center>
                <Carousel>
                  <Carousel.Item >
                  <img src='https://cdn.pkwteile.de/thumb?id=1158719&m=0&n=0&lng=pt&ccf=94077835'
                  width={270}
                  height={200}  
                />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="/josesite/public/alternadorbosch.jpg" height="445"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </center>
            </Col>
            <Col><h4 className='titulos'>Especificações do Alternador Da Bosch</h4>
              
              <p>Alternador de topo de linha atualmente no mercado com qualidade íncrivel.</p>
              <h3 className='p'>Preço 120€</h3>
              <div class="btn-group" role="group" aria-label="Basic example">
                
              </div>
              <p></p>
              <button type="button" class="btn btn-light btn-outline-danger btn-sm" onClick={() => {

                carrinho[carrinho.length] = { id: nextid++, name: "sdvgfgdsgf",Preco: +"€", img: "/alternadorbosch",};
                localStorage.setItem("carrinho", JSON.stringify(carrinho),window.location.reload());

              }}>Adicione ao Carrinho:</button>

              <p></p>
              <p className='p'>Método de pagamento:</p>
              <img src="/metodosdepagamento.png" height="120" />
            </Col>
          </Row>
        </Container>
      </div>
    </body>
  );
}
export default AlternadorDaBosch;