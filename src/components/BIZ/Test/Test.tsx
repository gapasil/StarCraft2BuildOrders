import React, {FC} from 'react'
import style from "./test.module.scss"
import TerranBackground from "./Terran.mp4"
import ZergBackground   from "./Zerg.mp4"
import ProtosBackground from "./Protos.mp4"
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
