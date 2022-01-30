import React, { useContext } from 'react';
import { BsShieldLock, BsCardText, BsClockHistory, BsCreditCard2Front, BsStar, BsPersonBoundingBox } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { Title, Description, Button } from '../../../styles/GlobalComponents';
import { Card, CardsContainer, Container, DataContainer } from './styles';

const QuemPode: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <DataContainer>
        <Title fontSize={'3.5rem'}>Quem pode contratar?</Title>
        <Description>Você pode antecipar os próximos 7 anos do seu saque-aniversário,
          desde que o seu saldo no FGTS seja superior a R$400,00.
        </Description>
        <CardsContainer>
          <Card>
            <BsPersonBoundingBox />
            <div>
              <h1>Ser maior de 18 anos</h1>
              <p>Qualquer pessoa que possua a cima de 18 anos que possua saldo FGTS.</p>
            </div>
          </Card>
          <Card>
            <BsStar />
            <div>
              <h1>Situação Regular na Receita Federal</h1>
              <p>O processo de consulta é bem simples e você pode fazer clicando  AQUI.</p>
            </div>
          </Card>
          <Card>
            <BsCreditCard2Front />
            <div>
              <h1>Possuir conta corrente ou poupança</h1>
              <p>Agora só aguardar o dinheiro cair na sua conta
                Caso tenha algum problema pode nos contatar via  Chat ou Whatsapp</p>
            </div>
          </Card>
        </CardsContainer>
        <div className="row-right">
          <Button color={colors.text_light} backgroundColor={colors.text}>Contrate agora <FiArrowRight /></Button>
        </div>
      </DataContainer>
    </Container>
  )
}

export default QuemPode;

