import React, { useContext, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { Button, Title } from '../../../styles/GlobalComponents';
import { useToast } from '../../contexts/ToastContext';
import { ContainerStep } from '../FormAddress/styles';
import InputField from '../InputField';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// import { Container } from './styles';
interface IFormPessoal {
    setStep: (value: boolean) => void,
    setClientPessoalData: (value: IPessoa) => void,
}

export interface IPessoa {
    documento_rg?: string,
    emissao_rg?: string,
    tipo?: "RG" | "Ctps" | "Passaporte" | "Cnh" | "IdentidadeEstrangeira" | "Outros",
    orgao_emissor?: string,
    uf_emissor?: string,
    email?: string,
}

const FormPessoal: React.FC<IFormPessoal> = ({ setStep, setClientPessoalData }) => {
    const animatedComponents = makeAnimated();

    const [dataPessoa, setDataPessoa] = useState<IPessoa>()
    const { setModal: Toast } = useToast()
    const { colors } = useContext(ThemeContext)

    const listDocuments = [
        { value: 'RG', label: 'RG' },
        { value: 'Ctps', label: 'Ctps' },
        { value: 'Passaporte', label: 'Passaporte' },
        { value: 'Cnh', label: 'Cnh' },
        { value: 'IdentidadeEstrangeira', label: 'IdentidadeEstrangeira' },
        { value: 'Outros', label: 'Outros' },
    ]

    return (
        <ContainerStep
            onSubmit={(event) => {
                event.preventDefault()
                if (!dataPessoa?.documento_rg || !dataPessoa?.tipo || !dataPessoa?.uf_emissor || !dataPessoa?.emissao_rg || !dataPessoa?.email) {
                    return Toast({
                        type: 'error',
                        title: 'Preencha todos os campos',
                        mesage: 'Preencha todos os campos para continuar'
                    })
                }

                if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(dataPessoa.email)){
                    return Toast({
                        type: 'error',
                        title: 'Email inválido',
                        mesage: 'Preencha um email válido para continuar'
                    })
                }
                setClientPessoalData(dataPessoa)
                setStep(true)
            }}>
            <div className='wrap'>
                <Title>Email & Documento</Title>
                <InputField
                    focus
                    title={`Seu e-mail`}
                    value={dataPessoa?.email || ''}
                    setValue={(value) => {
                        setDataPessoa({ ...dataPessoa, email: value, })
                    }}
                    type='email'
                />
                <Select
                    placeholder="Tipo de Documento"
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    options={listDocuments}
                    value={dataPessoa?.tipo ? [{ value: dataPessoa?.tipo, label: dataPessoa?.tipo }] : []}
                    onChange={(option: any) => {
                        if (option) {

                            return setDataPessoa({ ...dataPessoa, tipo: option.value })
                        }
                    }}
                />
                <InputField
                    title={`Numero ${dataPessoa?.tipo || 'Documento'}`}
                    value={dataPessoa?.documento_rg || ''}
                    setValue={(value) => {
                        setDataPessoa({ ...dataPessoa, documento_rg: value, })
                    }}
                />
                <InputField
                    maxLength={2}
                    title={`UF Emissor ${dataPessoa?.tipo || 'Documento'}`}
                    value={dataPessoa?.uf_emissor || ''}
                    setValue={(value) => {
                        setDataPessoa({ ...dataPessoa, uf_emissor: value, })
                    }}
                />
                <InputField
                    title={`Data de Emissão ${dataPessoa?.tipo || 'Documento'}`}
                    mask='date'
                    value={dataPessoa?.emissao_rg || ''}
                    setValue={(value) => {
                        setDataPessoa({ ...dataPessoa, emissao_rg: value, })
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