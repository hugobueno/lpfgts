import React from 'react';
import { Container, DataContainer } from './styles';
import Image from 'next/image';
import LogoImage from '/public/assets/logo.png';
import { FiFacebook, FiHeadphones, FiInstagram } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <Container>
            <DataContainer>
                <div className='f_header'>
                    <Image src={LogoImage} />
                    <div className='social_icons'>
                        <Link passHref href={''}><a href="#"> <FiFacebook /></a></Link>
                        <Link passHref href={''}><a href="#">  <FiInstagram /></a></Link>
                        <Link passHref href={''}><a href="#">  <BsWhatsapp /></a></Link>
                    </div>
                </div>
                <div className='f_contact'>
                    <div className='f_contact_item'>
                        <FiHeadphones />
                        <p>
                            Fale conosco por Whatsapp: (xx) xxxx-xxxx
                            De segunda a sexta das 8h às 18h, exceto feriados
                        </p>
                    </div>

                    <p>
                        Não cobramos nenhum valor antecipado para aprovação do seu empréstimo. Caso alguém, se passando por nós (Consig Promotora), solicite qualquer depósito antecipado procure a policia, encerre o contato e fale com a gente. Você pode ser vítima de uma tentativa de fraude
                    </p>
                    <div className='f_contact_item'>
                        <BsWhatsapp />
                        <p>
                            SAC: 0800 xxx xxxxx
                            De segunda a sexta das 8h às 18h, exceto feriados
                        </p>
                    </div>

                    <p>
                        A Sua Empresa  é uma empresa independente, Correspondente no País e pertencente a xxxxxxx inscrita no CNPJ/MF sob o nº. xx.xxxx.xxxx/xxxxx-xx, situada na Rua xxxxx xxxx xxxx, xxx – Centro, xxxxx– MS, CEP xxxxx-351.
                    </p>
                </div>
                <div className='f_terms'>
                    <Link passHref href={''}><a >Politicas de privacidade</a></Link>
                    <Link passHref href={''}><a >Termos de uso</a></Link>
                </div>

            </DataContainer>
        </Container>
    )
}

export default Footer;