import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import style from "./radioGroup.module.scss"

interface ArrayCheckBoxType {
    label    : string;
    value    : string;
    parameter: string
}  

interface RadioGroupProps {
    onChange : ({ value, parameter }: ArgOnchangeRadioGroup) => void;
    ArrayCheckBox : Array<ArrayCheckBoxType>
}

export interface ArgOnchangeRadioGroup {
  value    : string;
  parameter: string
}

export const RadioGroup: FC<RadioGroupProps> = ({onChange, ArrayCheckBox}) => {
    const [selectedValue, setSelectedValue] = useState<null|string>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);

        if (onChange) {
            onChange({
                parameter: ArrayCheckBox[parseInt(event.target.id, 10)].parameter,
                value    : ArrayCheckBox[parseInt(event.target.id, 10)].value
            });
        }
    };

    return (
        <div className={style.radio}>
            {ArrayCheckBox.map((option, index) => (
                <label key={option.value} className={style.radio__labelRadio}>
                    <input
                        id={`${index}`}
                        type="radio"
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={handleChange}
                    />
                    <span>{option.label}</span>
                </label>
            ))}
        </div>
    )
}
