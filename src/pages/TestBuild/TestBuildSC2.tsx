import React, { FC } from 'react'
import { redirect } from 'react-router-dom'
import { Test } from '../../components/BIZ/Test/Test'
import style from "./testBuild.module.scss"

export const TestBuildSC2: FC = () => {

  let RaceArr = []

  for (let i = 0; i < window.location.pathname.length; i++) {
    if(i >= 6){
      RaceArr.push(window.location.pathname[i])
    }
  }

  const Race = RaceArr.join("");

  if(Race != "terran" && Race != "protos" && Race != "zerg")
  {
    redirect("/")
    return(
      <div>
      </div>
    )
  }

  return (
    <div className={style.container}>
      <Test Race={Race}/>
    </div>
  )
}
