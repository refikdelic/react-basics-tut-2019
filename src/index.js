import React from 'react';
import ReactDOM from 'react-dom';
// import knjige

import {knjige} from './Knjige';
import SpecificnaKnjiga from './Knjiga';

// styling
import './index.css';


const PopisKnjiga = () => {

 return(
  <section className='popisknjiga'>{knjige.map((knjiga)=>{
   const {slika, naslov, autor}=knjiga
   return (
    <SpecificnaKnjiga key={knjiga.id} knjiga={knjiga}> </SpecificnaKnjiga>
   )
  })}</section>
 )
}

ReactDOM.render(<PopisKnjiga/>, document.getElementById('root'))





// stari kod, previse se povaljaju stvar




// import React from 'react'
// import ReactDOM from 'react-dom'

// // styling
// import './index.css'

// // varijable
// const prvaKnjiga = {
//  slika :"https://images-na.ssl-images-amazon.com/images/I/51QvEDiChOL._AC_SX184_.jpg",
//  naslov: 'The Mercies',
//  autor: 'Kirin Millwood Hargrave'
// }
// const drugaKnjiga = {
//  slika :"https://images-na.ssl-images-amazon.com/images/I/41rwyTByHuL._AC_SX184_.jpg",
//  naslov: 'Sigh, Gone: A Misfits',
//  autor: 'Phuc Tran'
// }
// // komponente

// const PopisKnjiga = () => {
//  return(
//   <section className='popisknjiga'>
//    <Knjiga 
//    slika={prvaKnjiga.slika} 
//    naslov={prvaKnjiga.naslov} 
//    autor={prvaKnjiga.autor}>

//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nihil.</p>

//     {/* children rodjo */}

   
//    </Knjiga>
//    <Knjiga 
//    slika={drugaKnjiga.slika} 
//    naslov={drugaKnjiga.naslov} 
//    autor={drugaKnjiga.autor}>
   

//    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
//    {/* children prop */}

//    </Knjiga>
   
//    </section>
//  )
// }

// // vjezbanje propova :D
// // prop je primjer, moze se staviti bilo koje ime u zagradi

// const Knjiga = ({slika, naslov, autor, children}) => {
//  // let {slika, naslov, autor, children}=props
//  // 2 nacina destruktuiranja propova
//  console.log({slika, naslov, autor, children});
 
//  // CHILDREN PROP specijalan prop, stavlja se izmedju tagova, 

//  return(
//   <article className='knjiga'>
//   <img src={slika}/>
//  <h3>{naslov}</h3>
//  <h5>{autor}</h5>
//  {children}
//    </article>
//  )
// }

// // rendanje
// // rendas sta hoces, koju funkciju hoces nju i rendas
// ReactDOM.render(<PopisKnjiga/>, document.getElementById('root'))