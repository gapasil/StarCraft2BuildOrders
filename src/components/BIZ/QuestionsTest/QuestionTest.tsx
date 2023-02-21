import React, { FC, useEffect, useState } from 'react'
import style from "./questionTest.module.scss"
import { CustomSlider } from '../../UI/Slider/Slider';
import { ArgOnchangeRadioGroup, RadioGroup } from '../../UI/RadioGroup/RadioGroup';
import { useNavigate }  from 'react-router-dom';
import { encodeURL } from '../../../utils/encodeUrlDecode';
import { ResultTest } from '../../../Types/TypeTest';

export const QuestionTest: FC<{Race: string}> = ({Race}) => {
    const [ resultTest , setResultTest ] = useState<ResultTest>({
        currentRace: Race
    })
    const [ svipeSlider, setSvipeSlider] = useState<boolean>(false)

    const navigate = useNavigate();

    const onChangeCheckBox = ({parameter, value}: ArgOnchangeRadioGroup): void => {
        if(parameter == "race")
        {
            setResultTest({
                ...resultTest,
                race: value
            })
        }
        if(parameter == "difficulty")
        {
            setResultTest({
                ...resultTest,
                difficulty: value
            })
        }
        if(parameter == "strategy")
        {
            setResultTest({
                ...resultTest,
                strategy: value
            })
        }
        setSvipeSlider(true)
    }

    useEffect(()=>{
        if(Object.keys(resultTest).length == 4)
        {    
            navigate(`/Build/?data=${encodeURL(resultTest)}`)
        }
    },[resultTest])

    return (
        <CustomSlider 
            svipeSlider={svipeSlider} 
            setSvipeSlider={setSvipeSlider}
        >
            <div className={style.containerQuestion}>
                <div className={style.containerQuestion__blockQuestion}>
                    <h1>Против какой рассы</h1>
                    <div className={style.containerQuestion__blockQuestion__BlockCheckBox}>
                        <RadioGroup
                            onChange = {onChangeCheckBox}
                            ArrayCheckBox={
                            [
                                {
                                    label    : "Протос",
                                    value    : "protos",
                                    parameter: "race" 
                                },
                                {
                                    label    : "Зерг",
                                    value    : "zerg",
                                    parameter: "race"
                                },
                                {
                                    label    : "Терран",
                                    value    : "terran",
                                    parameter: "race"
                                }
                            ]}
                        />
                    </div> 
                </div> 
            </div>
            <div className={style.containerQuestion}>
                <div className={style.containerQuestion__blockQuestion}>
                    <h1>Стратегия</h1>
                    <div className={style.containerQuestion__blockQuestion__BlockCheckBox}>
                        <RadioGroup
                            onChange = {onChangeCheckBox}
                            ArrayCheckBox={
                            [
                                {
                                    label    : "Агрессия",
                                    value    : "Aggressive",
                                    parameter: "strategy" 
                                },
                                {
                                    label    : "All-in",
                                    value    : "All-in",
                                    parameter: "strategy"
                                },
                                {
                                    label    : "Макро",
                                    value    : "Macro",
                                    parameter: "strategy"
                                }
                            ]}
                        />
                    </div>  
                </div>
            </div>
            <div className={style.containerQuestion}>
                <div className={style.containerQuestion__blockQuestion}>
                    <h1>Сложность</h1>
                    <div className={style.containerQuestion__blockQuestion__BlockCheckBox}>
                        <RadioGroup
                            onChange = {onChangeCheckBox}
                            ArrayCheckBox={
                            [
                                {
                                    label    : "Легко",
                                    value    : "1",
                                    parameter: "difficulty" 
                                },
                                {
                                    label    : "Средне",
                                    value    : "2",
                                    parameter: "difficulty"
                                },
                                {
                                    label    : "Сложно",
                                    value    : "3",
                                    parameter: "difficulty"
                                }
                            ]}
                        />
                    </div>  
                </div>
            </div>
        </CustomSlider>
    )
}
