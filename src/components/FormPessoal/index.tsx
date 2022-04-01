import React, { useContext, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { Button, Title } from '../../../styles/GlobalComponents';
import { useToast } from '../../contexts/ToastContext';
import { ContainerStep } from '../FormAddress/styles';
import InputField from '../InputField';

// import { Container } from './styles';
interface IFormPessoal {
    setStep: (value: boolean) => void,
    setClientPessoalData: (value: IPessoa) => void,
}

export interface IPessoa {
    nome?: string,
    nascimento?: string,
    mae?: string,
    documento_rg?: string,
    // emissao_rg?: string,
}

const FormPessoal: React.FC<IFormPessoal> = ({ setStep, setClientPessoalData }) => {

    const [dataPessoa, setDataPessoa] = useState<IPessoa>()
    const { setModal: Toast } = useToast()
    const {colors} = useContext(ThemeContext)
    return (
        <ContainerStep
            onSubmit={(event) => {
                event.preventDefault()
                if (!dataPessoa?.nome || !dataPessoa.nascimento || !dataPessoa.mae || !dataPessoa.documento_rg) {
                    return Toast({
                        type: 'error',
                        title: 'Preencha todos os campos',
                        mesage: 'Preencha todos os campos para continuar'
                    })
                }
                setClientPessoalData(dataPessoa)
                setStep(true)
            }}>
            <div className='wrap'>
                <Title>Seus dados</Title>
                <InputField
                    focus
                    title='Nome'
                    value={dataPessoa?.nome || ''}
                    setValue={(value) => {
                        setDataPessoa({ ...dataPessoa, nome: value, })
                    }}
                />
                <InputField
                    mask='date'
                    title='Nascimento'
                    value={dataPessoa?.nascimento || ''}
                    setValue={(value) => {
                        setDataPessoa({ ...dataPessoa, nascimento: value, })
                    }}
                />
                <InputField
                    title='Mãe'
                    value={dataPessoa?.mae || ''}
                    setValue={(value) => {
                        setDataPessoa({ ...dataPessoa, mae: value, })
                    }}
                />
                <InputField
                    title='Rg'
                    value={dataPessoa?.documento_rg || ''}
                    setValue={(value) => {
                        setDataPessoa({ ...dataPessoa, documento_rg: value, })
                    }}
                />
                <Button
                    color={colors.text}
                    backgroundColor={colors.primary}
                    type='submit'
                    margin='.5rem .5rem .5rem 0'
                >Continuar <FiArrowRight />
                </Button>
            </div>
        </ContainerStep>
    )
}

export default FormPessoal;