import React, { useContext, useState } from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { Button, Title } from '../../../styles/GlobalComponents';
import InputField from '../InputField';
import { GroupRadio } from './styles';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { maskAgence } from '../../utils/masks';
import { useToast } from '../../contexts/ToastContext';
import { ContainerStep } from '../FormAddress/styles';
import { useRef } from 'react';
import { RefObject } from 'react';
import { useEffect } from 'react';
import { ThemeContext } from 'styled-components';


// import { Container } from './styles';
interface IFormPessoalBank {
    setStep: (value: boolean, dataBank: IBank) => void,
    lock: boolean,

}

export interface IBank {
    banco?: string,
    agencia?: string,
    conta?: string,
    tipo?: "ContaCorrente" | "ContaPoupanca",
    digito_conta?: string
}

const FormPessoalBank: React.FC<IFormPessoalBank> = ({ setStep, lock }) => {
    const { colors } = useContext(ThemeContext)
    const { setModal: Toast } = useToast()
    const animatedComponents = makeAnimated();
    const [dataBank, setDataBank] = useState<IBank>()

    const banksList = [
        { value: '104', label: 'Caixa Econômica Federal' },
        { value: '001', label: 'Banco do Brasil' },
        { value: '237', label: 'Bradesco' },
        { value: '341', label: 'Itaú' },
        { value: '033', label: 'Santander' },
        { value: '422', label: 'Safra' },
        { value: '041', label: 'Banrisul' },
        { value: '748', label: 'Sicred' },
        { value: '756', label: 'Sicoob' },
        { value: '623', label: 'Pan' }
    ]

    const optionsBanks = [
        { value: 'ContaCorrente', label: 'Conta Corrente ' },
        { value: 'ContaPoupanca', label: 'Conta Poupança ' },
    ]

    return (
        <ContainerStep
            onSubmit={(event) => {
                event.preventDefault()
                if (!dataBank?.banco || !dataBank?.agencia || !dataBank?.conta || !dataBank?.tipo) {
                    return Toast({
                        type: 'error',
                        title: 'Preencha todos os campos',
                        mesage: 'Preencha todos os campos para continuar',
                    })
                }
                setStep(true, dataBank)
            }}
        >
            <div className='wrap'>
                <Title>Dados bancários para recebimento</Title>
                <Select
                    placeholder="Selecione o banco"
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    options={banksList}
                    // value={dataBank?.banco ? [{ value: dataBank?.banco, label: dataBank?.banco }] : []}
                    onChange={(option: any) => {
                        if (option) {

                            return setDataBank({ ...dataBank, banco: option.value || '', })
                        }
                    }}
                />
                <InputField
                    maxLength={4}
                    title='Agencia'
                    value={dataBank?.agencia || ''}
                    setValue={(value) => {
                        setDataBank({ ...dataBank, agencia: maskAgence(value), })
                    }}
                />

                <InputField
                    maxLength={15}
                    title='Conta sem digito'
                    value={dataBank?.conta || ''}
                    setValue={(value) => {
                        setDataBank({ ...dataBank, conta: value, })
                    }}
                />
                 <InputField
                    maxLength={1}
                    title='Digito da conta'
                    value={dataBank?.digito_conta || ''}
                    setValue={(value) => {
                        setDataBank({ ...dataBank, digito_conta: value, })
                    }}
                />
                <Select
                    className='w-100'
                    placeholder="Operacao da Conta"
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    options={optionsBanks}
                    // value={dataBank?.tipo ? [{value: dataBank?.tipo}] : []}
                    onChange={(option: any) => {
                        if (option) {
                            return setDataBank({ ...dataBank, tipo: option.value })
                        }
                    }}
                />
                <Button
                    color={colors.text}
                    backgroundColor={colors.primary}
                    type='submit'
                    disabled={lock}
                    margin='1rem 0 0 0'
                >
                    Concluir <FiCheck />
                </Button>
            </div>
        </ContainerStep>
    )
}

export default FormPessoalBank;