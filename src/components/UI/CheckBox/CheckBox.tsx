import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import style from "./checkBox.module.scss"

interface CustomCheckBoxProps {
  onChange : ({ value, parameter }: ArgOnchangeCustomCheckBox) => void;
  label    : string;
  value    : string;
  parameter: string
}

export interface ArgOnchangeCustomCheckBox {
  value    : string;
  parameter: string
}

export const CustomCheckBox: FC<CustomCheckBoxProps> = ({onChange, label, value, parameter}) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    if (onChange) {
      onChange({
        parameter: parameter,
        value    : value
      });
    }
  };

  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <p>{label}</p>
      </label>
    </div>
  )
}
