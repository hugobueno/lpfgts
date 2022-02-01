import React, { useContext } from 'react';
import { NextPage } from 'next';

import { AutorizationContainer, Container, FormContainer, GridForm, StepContainer, StepImage } from '../styles/simulacaoStyles';
import Image from 'next/image';
import Logo from '/public/assets/logo.png';
import { Button, Description, Title } from '../styles/GlobalComponents';
import Step1 from '/public/assets/step1.svg';
import Step2 from '/public/assets/step2.svg';
import Step3 from '/public/assets/step3.svg';
import Link from 'next/link';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { FiArrowRight } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';

interface Values {
  cpf: string;
  phone: string;
}

const pages: NextPage = () => {
  const { colors } = useContext(ThemeContext);
  const [step, setStep] = React.useState(0);

  const arrayData = [
    {
      title: 'Agora faltam somente três passos...',
      description: 'leva menos de 3 min para concluir a simulação.',
      image: Step1,
    },
    {
      title: `
      Precisamos que
      autorize um dos nossos
      bancos no app FGTS
      `,
      description: 'siga nosso guia para autorizar um banco.',
      image: Step2,
    },
    {
      title: `
      Você tem saldo
      pré-aprovado disponível
      `,
      description: 'agora é so escolher o valor que deseja sacar.',
      image: Step3,
    },

  ]


  const FormCapsuled = () => {
    return (
      <FormContainer>
        <Title>Antecipe seu saque FGTS</Title>
        <Description>Preencha os dados abaixo para fazer a sua solicitação.</Description>
        <div className='form-container'>
          {/* hello copilot*/}

          <Formik
            validate={values => {
              const errors: any = {};
              if (!values.cpf) {
                errors.cpf = 'Ops!, Campo obrigatório';
              }
              if (!values.phone) {
                errors.phone = 'Ops!, Campo obrigatório';
              }

              return errors;
            }}
            initialValues={{
              cpf: '',
              phone: '',
            }}
            onSubmit={(
              values: Values,
              { setSubmitting, }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                setStep(step + 1);
              }, 500);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <label htmlFor="firstName">Digite seu cpf</label>
                <Field id="cpf" name="cpf" placeholder="cpf" />
                <span>{errors.cpf && errors.cpf}</span>
                <label htmlFor="phone">Seu celular</label>
                <Field id="phone" name="phone" placeholder="celular" />
                <span>{errors.phone && errors.phone}</span>

                <div>
                  <Link href="/simulacao/resultado">
                    <a >Politica de privacidade e termos de uso</a>
                  </Link>
                </div>
                <Button color={colors.text} backgroundColor={colors.primary}>Aceitar e Continuar <FiArrowRight /></Button>
              </Form>
            )}
          </Formik>
        </div>
      </FormContainer>
    )
  }

  const StepAuthorizate = () => {
    return (
      <AutorizationContainer>
        <div>
          <Button onClick={() => setStep(step + 1)} color={colors.text} backgroundColor={colors.primary}>Já Autorizei <FiArrowRight /></Button>
          <Button color={colors.text_light} backgroundColor={colors.text}>Acesso guia <FiArrowRight /></Button>
        </div>
        <p>
          Caso precise de ajuda para autorizar um Banco,
          preparamos um passo a passo <strong>simplificado para você</strong>.
        </p>
      </AutorizationContainer>
    )
  }

  return (
    <Container>
      <StepContainer>
        <div>
          <Image src={Logo} />
        </div>
        <StepImage>
          <Image src={arrayData[step].image} />
          <Title>{arrayData[step].title}</Title>
          <Description>{arrayData[step].description}</Description>
        </StepImage>

      </StepContainer>
      <GridForm>
        {step === 0 && <FormCapsuled />}
        {step === 1 && <StepAuthorizate />}

      </GridForm>
    </Container>
  )
}

export default pages;