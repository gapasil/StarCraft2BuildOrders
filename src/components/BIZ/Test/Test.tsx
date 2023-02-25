import React, { FC, useEffect, useState } from 'react'
import style from "./test.module.scss"
import TerranBackground from "./Terran.mp4"
import ZergBackground   from "./Zerg.mp4"
import ProtosBackground from "./Protos.mp4"
import { QuestionTest } from '../QuestionsTest/QuestionTest';

export const Test: FC<{Race: string}> = ({Race}) => {

    const [ videoLoaded, setVideoLoaded ] = useState(false);

    useEffect(() => {
      const videoElement = document.getElementById('video') as HTMLVideoElement;
  
      const handleCanPlayThrough = () => {
        setVideoLoaded(true);
        videoElement.play();
      };
  
      videoElement.addEventListener('canplaythrough', handleCanPlayThrough);
  
      return () => {
        videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
      };
    }, []);

    return (
        <div className={style.container}>
            <div className={style.container__background}>
                <video autoPlay muted loop id="video" >
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
            {
                videoLoaded?
                    <div className={style.container__blockTest}>
                        <QuestionTest Race={Race}/>
                    </div>
                :
                    <></>
            }

        </div>
    )
}
