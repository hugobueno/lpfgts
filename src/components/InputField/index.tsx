import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { maskCEP, maskCPF, maskDate, maskPhone } from '../../utils/masks';
import { InputFields } from './styles';

interface IInputField {
  value: string,
  setValue: (value: string) => void,
  title: string,
  mask?: 'cep' | 'cpf' | 'phone' | 'date',
  focus?: boolean,
  type?: 'text' | 'date',
  maxLength?: number
}

const InputField: React.FC<IInputField> = ({ setValue, value, title, mask, focus, type, maxLength }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const isNumeric = mask === 'cep' || mask === 'cpf' || mask === 'phone'

  const [typeInput, setTypeInput] = useState<'text' | 'number'>(isNumeric  ? 'number': 'text')


  useEffect(() => {
    if (focus) {
      inputRef.current?.focus()
    }


  }, [focus])

  useEffect(() => {
      if(value.length === 11 && mask === 'cpf'){
        setTypeInput('text')
        setValue(maskCPF(value))
      }

      if(value.length === 8 && mask === 'cep'){
        setTypeInput('text')
        setValue(maskCEP(value))
      }

      if(value.length === 11 && mask === 'phone'){
        setTypeInput('text')
        setValue(maskPhone(value))
      }

      if(mask === 'date'){
        setValue(maskDate(value))
      }
  }, [value])


  return (
    <InputFields >
      <input maxLength={maxLength} ref={inputRef} value={value} onChange={(event) => {
        setValue(event.target.value)
      }} name='person_field' type={typeInput} />
      <label className={value ? 'active' : ''} htmlFor="person_field">{title}</label>
    </InputFields>
  )
}

export default InputField;


