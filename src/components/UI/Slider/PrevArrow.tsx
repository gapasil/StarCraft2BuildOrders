import React, { FC } from 'react'

interface props {
    currentSlide?: number,
    slideCount  ?: number,
}

export const PrevArrow: FC<props> = ({ currentSlide, slideCount, ...props }) => {
  return (
    <button
        {...props}
        className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
    >
        Previous
    </button>
  )
}
