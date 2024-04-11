import React from 'react'

function Reply({className,type, handleClick}) {
  return (
    <button className={className} onClick={handleClick}>
        {type}
    </button>
  )
}

export default Reply