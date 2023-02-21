import React, {FC} from 'react'
import style from "./test.module.scss"
import TerranBackground from "./TerranBackground.mp4"
import ZergBackground   from "./ZergBackground.mp4"
import ProtosBackground from "./ProtosBackground.mp4"
import { QuestionTest } from '../QuestionsTest/QuestionTest';

export const Test: FC<{Race: string}> = ({Race}) => {

    return (
        <div className={style.container}>
            <div className={style.container__background}>
                <video autoPlay muted loop id="Background">
                    <source 
                        src={
                            Race=="terran"?TerranBackground
                            :
                            Race=="protos"?ProtosBackground
                            :
                            Race=="zerg"?ZergBackground
                            :
                            null
                        }
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className={style.container__blockTest}>
                <QuestionTest Race={Race}/>
            </div>
        </div>
    )
}
