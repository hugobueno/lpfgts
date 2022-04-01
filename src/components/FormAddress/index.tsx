import React, { useContext, useRef, useState } from 'react';
import { useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { Button, Input, Title } from '../../../styles/GlobalComponents';
import apiCEP from '../../configs/apiCEP';
import { useToast } from '../../contexts/ToastContext';
import { clearMask } from '../../utils/masks';
import InputField from '../InputField';
import { ContainerStep } from './styles';

export interface IAddress {
    logradouro?: string,
    numero?: string,
    complemento?: string,
    bairro?: string,
    cidade?: string,
    uf?: string,
    cep?: string,
}

interface IAddressForm {
    setStep: (value: boolean) => void,
    setCurrencyAddress: (value: IAddress) => void,
}

const FormAddress: React.FC<IAddressForm> = ({ setStep, setCurrencyAddress }) => {
    const [address, setAddress] = useState<IAddress>()
    const { setModal: Toast } = useToast()
    const [focusNum, setFocusNum] = useState(false)
    const cepRef = useRef<HTMLLabelElement>(null)
    const { colors } = useContext(ThemeContext)

    const handleGetAddressByCep = async () => {
        try {
            if (!address?.cep || address?.cep.length < 8) {
                return Toast({ type: 'warning', title: 'O CEP é obrigatório', mesage: 'preencha e tente novamente.' })
            }
            const clearCEP = clearMask(address.cep)
            Toast({ type: 'loading', title: 'Buscando Cep', mesage: 'aguarde...' })
            const { data } = await apiCEP.get(`${clearCEP}/json`)
            if (data?.cep) {
                Toast({ type: 'success', title: 'Cep encontrato', mesage: 'Os dados foram preenchidos' })
                setAddress({
                    cep: address.cep,
                    bairro: data.bairro,
                    cidade: data.localidade,
                    complemento: address.complemento,
                    numero: address.numero,
                    logradouro: data.logradouro,
                    uf: data.uf
                })
                setFocusNum(true)
            }
        } catch (error) {
            console.log('falha na pesquisa do CEP')
            return Toast({ type: 'error', title: 'Falha ao buscar CEP', mesage: 'verifique e tente novamente.' })
        }
    }

    useEffect(() => {
        cepRef.current?.focus()
        if (address?.cep?.length === 9) {
            handleGetAddressByCep()
        }
    }, [address?.cep])



    return (
        <ContainerStep
            onSubmit={(event) => {
                event.preventDefault()
                if (!address?.cep || !address.bairro || !address.cidade || !address.logradouro || !address.numero) {
                    return Toast({ type: 'warning', title: 'Faltam 01 ou mais campos', mesage: 'todos os campos são obrigatórios.' })
                }
                setCurrencyAddress(address)
                setStep(true)
            }}>
            <div className='wrap'>
                <Title>Dados de endereço</Title>
                <InputField
                    focus={!address?.cep}
                    mask='cep' title='Cep'
                    value={address?.cep || ''}
                    setValue={(value) => {
                        setAddress({ ...address, cep: value, })
                    }}
                />
                <InputField
                    title='Endereço'
                    value={address?.logradouro || ''}
                    setValue={(value) => {
                        setAddress({ ...address, logradouro: value, })
                    }}
                />
                <InputField
                    focus={focusNum}
                    title='Numero'
                    value={address?.numero || ''}
                    setValue={(value) => {
                        setAddress({ ...address, numero: value, })
                    }}
                />
                <InputField
                    title='Cidade'
                    value={address?.cidade || ''}
                    setValue={(value) => {
                        setAddress({ ...address, cidade: value, })
                    }}
                />
                <InputField
                    title='Uf'
                    value={address?.uf || ''}
                    setValue={(value) => {
                        setAddress({ ...address, uf: value, })
                    }}
                />


                <Button
                    color={colors.text}
                    backgroundColor={colors.primary}
                    type='submit'
                    margin='.5rem .5rem .5rem 0'>Continuar <FiArrowRight /></Button>
            </div>
        </ContainerStep>
    )
}

export default FormAddress;