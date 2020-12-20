import * as React from 'react';

import './index.scss';

export const Card = () => {
  return (
    <div className="cardContainer">
      <div>
        <div className="cardContainer__cover">
          <img src="https://www.carbodydesign.com/media/2018/02/New-Volvo-V60-Front-End.jpg" alt="" />
        </div>
        <div className="cardContainer__name">
          <span>V60</span>
        </div>
        <div className="cardContainer__description">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis voluptate eos, animi neque dolor inventore expedita corrupti sequi, reprehenderit consequatur alias soluta cum? Unde numquam soluta laborum odio quia!
          </span>
        </div>
      </div>
    </div>
  )
}