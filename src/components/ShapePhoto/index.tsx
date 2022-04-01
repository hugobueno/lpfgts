import React from 'react';

import { PhotoContainer } from './styles';
import Image from 'next/image';
import ImageShape from '/public/assets/girl.png'
import { FiSmartphone } from 'react-icons/fi';

const ShapePhoto: React.FC = () => {


    return (
        <PhotoContainer>
            <Image objectFit='fill' alt="rapaz sorridente dando enfase no processo digital de contratação da proposta" src={ImageShape} />
        </PhotoContainer>
    )
}

export default ShapePhoto;