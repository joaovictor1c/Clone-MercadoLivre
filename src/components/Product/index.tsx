import React from 'react';

import tshirtImage from '../../assets/tshirt.png'
import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';
import { Container, Row, Panel, Column, Gallery,Section, Description  } from './styles';

const Product: React.FC = () => {
  return (
    <Container>

      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img alt="shir" src={tshirtImage}/>
          </Gallery>
          <Info/>
        </Column>
        <Column>
          <ProductAction/>
          <SellerInfo/>
          <WarrantySection/>
          <WarrantySection/>
          <WarrantySection/>
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida com Lorem</p>
        <p className="description"> Receba o produto que voce esta esperando ou...</p>
      </span>
      <span>
        <p className="title">Compra garantida com vendedor</p>
        <p className="description"> Sem garantia</p>
      </span>
    </div>

    <a>Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vel incidunt, et, sequi accusantium magnam tenetur maxime minima, ad cum doloribus temporibus amet omnis soluta libero nihil sit voluptatum laborum.</p>
    <br/>
    <br/>
    Itens inclusos: <br/>
    -1x Led <br/>
    -1x Led <br/>
    -1x Led <br/>
    -1x Led <br/>
    -1x Led <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis necessitatibus accusantium ipsa, aliquam sed minima recusandae repudiandae omnis, rem cumque quidem optio tenetur ipsum iste ut veniam. Similique, labore!
  </Description>
)
export default Product;
