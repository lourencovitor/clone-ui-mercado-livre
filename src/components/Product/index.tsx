/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";
import tshirtImage from "../../assets/tshirt.png";
import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";

function Product() {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>
          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
}

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title"> Compra garantida com o Lorem ipsum</p>
        <p className="description">
          {" "}
          Receba o produto que você está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendendor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#"> Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
      <br />
      <br />
      Itens Inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Pharetra pharetra
      massa massa ultricies mi quis. Felis imperdiet proin fermentum leo vel
      orci porta non pulvinar. Fringilla phasellus faucibus scelerisque eleifend
      donec pretium vulputate. Cursus in hac habitasse platea dictumst quisque.
      Tortor consequat id porta nibh venenatis cras sed. Tempor orci dapibus
      ultrices in. Egestas quis ipsum suspendisse ultrices gravida dictum fusce
      ut placerat. Faucibus ornare suspendisse sed nisi lacus. Consectetur
      libero id faucibus nisl tincidunt eget nullam non nisi. Nisl rhoncus
      mattis rhoncus urna neque viverra justo nec ultrices. Enim nec dui nunc
      mattis. Magnis dis parturient montes nascetur ridiculus mus mauris vitae
      ultricies. Quis viverra nibh cras pulvinar mattis. Mattis vulputate enim
      nulla aliquet. Eget velit aliquet sagittis id consectetur. Tortor id
      aliquet lectus proin nibh nisl condimentum id venenatis. Malesuada proin
      libero nunc consequat.
    </p>
  </Description>
);

export default Product;
