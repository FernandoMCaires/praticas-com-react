import React from 'react'

export default function Button({title, Onclick}) {
  return (
    <div className='buttonStyle'>
        <button onClick={ Onclick}>
           {title}
        </button>
    </div>
  )
}
