import React, { useContext } from 'react';
import { Container, DataContainer } from './styles';
import Image from 'next/image';
import LogoImage from '/public/assets/logo.png';
import { FiFacebook, FiHeadphones, FiInstagram } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';
import Logo from '/public/assets/logo.png'
import LogoLight from '/public/assets/logo_light.png'
import ImageLog from 'next/image';
import { ThemeContext } from 'styled-components';

const Footer: React.FC = () => {
    const { title } = useContext(ThemeContext)
    return (
        <Container>
            <DataContainer>
                <div className='f_header'>
                    <ImageLog width={150} objectFit={'contain'} alt='imagem da logo' src={title === 'light' ? Logo : LogoLight} />
                    <div className='social_icons'>
                        <Link passHref href={'https://www.facebook.com/SUA_-PAGINA/'}><a href="#"> <FiFacebook /></a></Link>
                        <Link passHref href={'https://www.instagram.com/SUA-PAGINA/'}><a href="#">  <FiInstagram /></a></Link>
                        <Link passHref href={'https://api.whatsapp.com/send?phone=55 SEU TELEFONE COM O DDD'}><a href="#">  <BsWhatsapp /></a></Link>
                    </div>
                </div>
                <div className='f_contact'>
                    <div className='f_contact_item'>
                        <FiHeadphones />
                        <p>
                            SAC: XX XXXXX-XXXX
                            De segunda a sexta das 8h às 18h, exceto feriados
                        </p>

                    </div>

                    <p>
                        Não cobramos nenhum valor antecipado para aprovação do seu empréstimo. Caso alguém, se passando por nós (SUA EMPRESA), solicite qualquer depósito antecipado procure a policia, encerre o contato e fale com a gente. Você pode ser vítima de uma tentativa de fraude.
                    </p>
                    <div className='f_contact_item'>
                        <BsWhatsapp />

                        <p>
                            Fale conosco por Whatsapp: (XX) XXXXX-XXXX
                            De segunda a sexta das 8h às 18h, exceto feriados
                        </p>
                    </div>

                    <p>
                        A SUA EMPRESA  é uma empresa independente, Correspondente no País e pertencente a Virtuos inscrita no CNPJ/MF sob o nº. XX.XXX.XXX/XXXX-XX, situada na XXXXXXXXXXXXXXXXXXXXX, XXXX – XXXXX, XXXXXXXXX-XX, CEP XXXXX-XX.
                    </p>
                </div>
                <div className='f_terms'>
                    <Link passHref href={'/termos'}><a target={'_blank'} >Termos de uso</a></Link>
                </div>

            </DataContainer>
        </Container>
    )
}

export default Footer;