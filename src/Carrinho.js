import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Figure from 'react-bootstrap/Figure';

function Carrinho() {

    var items;
    if (localStorage.getItem("carrinho")) {
        items = JSON.parse(localStorage.getItem("carrinho"));
    }
    else items = [];



    return (
        <body className="">
            <div className=''></div>
            <center>
                <div>
                    <div class="p">
                        <Container>
                            <Row xs={1} md={3}>
                                {
                                    items.map(item => (
                                        <Col xs={1} key={item.id}>
                                            <Figure className=''>
                                                <img src={item.img} height="200" />
                                                <h5>
                                                    {item.name}
                                                </h5>
                                            </Figure>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Container>
                    </div>
                </div>  
            </center>
        </body>
    );
}

export default Carrinho;