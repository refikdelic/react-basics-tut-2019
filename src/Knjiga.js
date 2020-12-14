import React from 'react';

const klik = () =>{
 alert('BEEEEEEEEEEEEEE')
}
const complexan = (autor) => {
console.log(autor);
};



const Knjiga = (props) => {

 console.log(props);
 const {slika, naslov, autor} = props.knjiga
 return(
  <article className='knjiga'>
  <img src={slika}/>
 <h3 onMouseOver={()=>console.log(naslov) }>{naslov}</h3>
 <h5>{autor}</h5>

<button className='batn' type='button' onClick={klik}>Hajklikni</button>

<button type='button' onClick={() => complexan(autor)}>Konzzzzola</button>

   </article>

   

 )
};
export default Knjiga;
