import React, { FC, ReactNode, RefObject, useRef, useState, useEffect, Dispatch, SetStateAction } from 'react'
import style from "./slider.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider , { Settings } from "react-slick";
import { PrevArrow } from './PrevArrow';

interface props {
    children      : ReactNode, 
    svipeSlider   : boolean,
    setSvipeSlider: Dispatch<SetStateAction<boolean>>
}

export const CustomSlider: FC<props> = ({children, svipeSlider, setSvipeSlider}) => {
    const [canSlide, setCanSlide] = useState<boolean>(false);
    const sliderRef = useRef<Slider>(null);

    useEffect(()=>{
        if(svipeSlider)
        {
            setSvipeSlider(false)
            nextSlide()
        }
    },[svipeSlider])

    const nextSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        prevArrow: canSlide?<PrevArrow/>:<></>,

        afterChange: (current) => {
            if(current === 0){
                setCanSlide(false)
            } else {
                setCanSlide(true)
            }
        },
    };

    return (
        <Slider 
            {...settings} 
            className={style.slider}
            ref={sliderRef}
            ///сокрытие кнопки для перелистывания в право
            nextArrow={<></>}
        >
            {children}
        </Slider>
    );
}
