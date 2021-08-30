import React from 'react';
import {useFormContext} from "react-hook-form";
import './FormField.scss'

interface FormFieldProps {
    label: string
    name: string
    placeholder: string
    type?: string
}

export const FormField: React.FC<FormFieldProps> = ({label,name,placeholder, type}) => {
    const {register, formState} = useFormContext()

    return (
        <div className='field'>
            <div className='field__label'>
                {label}
            </div>
            <input
                className={'field__input' + (!!formState.errors[name]?.message ? ' error' : '')}
                {...register(name)}
                placeholder={placeholder}
                name={name}
                type={type ? type : name}
            />
            <div className='field__error'>
                {formState.errors[name]?.message}
            </div>
        </div>
    );
};