import React from 'react'
import './ColorCard.css'

/*la const ColorCard recibe los parametros de App.jsx */
const ColorCard = ({hours, likes, colors}) => {
  return (
    <div className='colorCardContainer'>

        <div className='colorCard'>
        {
          colors.map(
            (color, index) => (
                <div style={{backgroundColor: color}} key={index}></div>
        )
      )
    }

        </div>  

        <div className='coloCardInfo'>
            <button>
                <i class="bi bi-heart"></i>
                {likes}
            </button>
            <span>{hours} hours</span>
        </div>

    </div>
  )
}

export default ColorCard