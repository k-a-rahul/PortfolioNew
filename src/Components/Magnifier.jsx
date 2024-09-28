import React, { useState } from 'react'

export const Magnifier=({object,...props})=> {
    const [ismagnified,setIsmagnified] = useState(false)
    const [magnifystyle,setMagnifystyle] = useState(false)
  return (
    <div className='w-1/2 h-auto bg-gray-50 relative'
    style={''} ></div>
  )
}
