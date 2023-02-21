import React, { FC } from 'react'
import terran from "./img/terran1.png"
import zerg   from "./img/zerg1.png"
import protos from "./img/protoss1.png"
import logo   from "../../globalimg/logo.png"
import style  from "./raceTitle.module.scss"
import { Link } from 'react-router-dom';

export const RaceTitle: FC = () => {
  return (
    <div className={style.container}>
        <div className={style.container__blockTest}>
          <Link to={"https://starcraft2.com/"} className={style.container__blockTest__logo}>
            <img src={logo}/>
          </Link>
          <h1>ВЫБЕРИТЕ РАСУ</h1>

          <div className={style.container__blockTest__select}>
            <Link to={"/test/terran"}>
              <img  src={terran}  className={style.container__blockTest__terran}/>
            </Link>

            <Link to={"/test/zerg"}>
              <img  src={zerg}    />
            </Link>
            
            <Link to={"/test/protos"}>
              <img  src={protos}  /> 
            </Link>
          </div>
        </div>
    </div>
  )
}
