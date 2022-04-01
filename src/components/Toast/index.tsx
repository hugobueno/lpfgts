import React from 'react';
import { FiCheck, FiLoader, FiTriangle, FiXCircle } from 'react-icons/fi';
import { useToast } from '../../contexts/ToastContext';
import { SvgContainer, ToastContainer } from './styles';

interface IToast {
    type: 'success' | 'warning' | 'error' | 'loading',
    title: string,
    message: string
}

const Toast: React.FC<IToast> = ({ message, title, type }) => {
    const { open } = useToast()
    return (
        <ToastContainer type={type} open={open}>
            <SvgContainer type={type}>
                {type == 'warning' &&  <FiTriangle /> }
                {type == 'error' &&  <FiXCircle /> }
                {type == 'loading' &&   <FiLoader /> }
                {type == 'success' &&   <FiCheck /> }
            </SvgContainer>
            <div>
                <h1>{title}</h1>
                <p>{message}</p>
            </div>
        </ToastContainer>
    )
}

export default Toast;