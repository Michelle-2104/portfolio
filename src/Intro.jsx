import React from 'react'
import pic from './img/car1.jpeg'

export default function Intro() {
  return (
    <div>
      <main className='intro-txt'>
        <img className='intro-img' src={pic} alt='Image of Michelle' ></img>
       <h1> Michelle Padera</h1> 
         <p>
            A Frontend Developer based in Port Elizabeth, South Africa.
         </p>
        <button className='intro-btn'>Get in touch</button> 
      </main>
    </div>
  )
}
