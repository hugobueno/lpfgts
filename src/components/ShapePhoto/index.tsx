import React from 'react';

import { PhotoContainer } from './styles';
import Image from 'next/image';
import ImageShape from '/public/assets/shape.png'
import { FiSmartphone } from 'react-icons/fi';

const ShapePhoto: React.FC = () => {
    return (
        <PhotoContainer>
            <div className='shape_circle'></div>
            <div className='shape_square'>
                <FiSmartphone />
                <span>100% digital</span>
            </div>
            <div className='image_shape'>
                <Image src={ImageShape} />

            </div>
        </PhotoContainer>
    )
}

export default ShapePhoto;