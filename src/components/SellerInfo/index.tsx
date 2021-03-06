import React from "react";
import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SuportIcon,
  ClocksIcon,
  More
} from "./styles";

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedors</Title>

      <LocationCard>
        <LocationIcon />
          <div>
            <p>Localização</p>
            <strong>São Paulo, São Paulo</strong>
          </div>
      </LocationCard>
      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermometer>
        <ReputationRow>
          <div>
            <strong>561</strong>
            <span>Vendas nos ultimos 4 meses</span>
          </div>

          <div>
            <strong>
              <SuportIcon />
            </strong>
            <span>Presta um bom atendimento</span>
          </div>

          <div>
            <strong>
              <ClocksIcon />
            </strong>
            <span>Vendas nos ultimos 4 meses</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais dados do vendedor</More>
    </Container>
  );
};

export default SellerInfo;
