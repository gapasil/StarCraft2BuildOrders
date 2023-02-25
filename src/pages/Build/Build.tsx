import React, { FC, useEffect, useState } from 'react'
import { BuildType, ResultTest } from '../../Types/TypeTest';
import { decodeURL } from '../../utils/encodeUrlDecode';
import style from "./build.module.scss"
import protosBuild from "./testQuestionJson/Protos.json"
import terranBuild from "./testQuestionJson/Terran.json"
import zergBuild   from "./testQuestionJson/Zerg.json"
import logo        from "../../globalimg/logo.png"
import { Link } from 'react-router-dom';

export const Build: FC = () => {
  const [ resultTest, setResultTest ] = useState<ResultTest>(decodeURL())
  const [ buildNotFound, setBuildNotFound ] = useState<BuildType>()
  const [ build     , setBuild      ] = useState<BuildType>()

  useEffect(()=>{
    console.log(build);
    console.log(buildNotFound);
  },[build,buildNotFound])

  const compareBuild = (build: BuildType) =>{
    if(
      build.difficulty == resultTest.difficulty 
      && 
      build.strategy   == resultTest.strategy
      &&
      build.vs[0]      == resultTest.race
      ||
      build.vs[1]      == resultTest.race
      ||
      build.vs[2]      == resultTest.race
    ){
      return true
    } else {
      return false
    }
  }

  useEffect(()=>{    
    if(resultTest.currentRace == "terran")
    {
      let result: boolean[] = []

      for(let key of terranBuild)
      {
        result.push(compareBuild(key))
        if(compareBuild(key))
        {
          setBuild(key)
        }
      }
      ///если нету подходящих билдов то все значения result = false и эта функция выдаст true тем самым мы запишем другой билд
      if(result.every((val, i, arr) => val === arr[0]))
      {
        setBuildNotFound(terranBuild[0])
      }      
    }
    if(resultTest.currentRace == "protos")
    {
      let result: boolean[] = []

      for(let key of protosBuild)
      {
        if(compareBuild(key))
        {
          setBuild(key)
        }
      }
      if(result.every((val, i, arr) => val === arr[0]))
      {
        setBuildNotFound(protosBuild[0])
      }
    }
    if(resultTest.currentRace == "zerg")
    {
      let result: boolean[] = []

      for(let key of zergBuild)
      {
        if(compareBuild(key))
        {
          setBuild(key)
        }
      }
      if(result.every((val, i, arr) => val === arr[0]))
      {
        setBuildNotFound(zergBuild[0])
      }
    }
  },[resultTest])

  if(build)
  {
    return (
      <div className={style.container}>
        <div className={style.container__blockBuild}>
          <Link to={"https://starcraft2.com/"} className={style.container__blockBuild__logo}>
            <img src={logo}/>
          </Link>
          <h1>{build.name}</h1>
          <p>{build.paragraph}</p>

          <div className={style.container__blockBuild__buildOrder}>
            <h1>Очередность действий</h1>
            {build.buildOrder?.map((value)=>{
              return(
                <p>{value}</p>
              )
            })}
          </div>
          <div className={style.container__blockBuild__buildOrder}>
            <h1>Юниты</h1>
            {build.units?.map((value)=>{
              return(
                <p>{value}</p>
              )
            })}
          </div>
          {
            build.link?
              <iframe width="98%" height="315" src={build.link} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            :
              <></>
          }
        </div>
      </div>
    ) 
  } else if(buildNotFound)
  {
    return (
      <div className={style.container}>
        <div className={style.container__blockBuild}>
          <Link to={"https://starcraft2.com/"}>
            <img src={logo}/>
          </Link>
          <p>Подходящих билдов не найдено предлагаем ознакомится с этим</p>
          <h1>{buildNotFound.name}</h1>
          <p>{buildNotFound.paragraph}</p>

          <div className={style.container__blockBuild__buildOrder}>
            <h1>Юниты</h1>
            {buildNotFound.units?.map((value)=>{
              return(
                <p>{value}</p>
              )
            })}
          </div>

          <div className={style.container__blockBuild__buildOrder}>
            <h1>Очередность действий</h1>
            {buildNotFound.buildOrder?.map((value)=>{
              return(
                <p>{value}</p>
              )
            })}
          </div>
          {
            buildNotFound.link?
              <iframe width="98%" height="315" src={buildNotFound.link} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            :
              <></>
          }        
        </div>
      </div>
    )
  } else {
    return (
      <div>

      </div>
    )
  }
}
