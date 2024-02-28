
//Si nosotros no estamos cambiando este valor
  //O sea es un valor que no se cambia
  //Fijo
  //Y si no tiene relacion con ningun hook
  //Asi no se vuelve a procesar
const saludo = "Hola";

const numeros = [1,2,3,4,5,6,7,8,9];
// const newMessage = {
//   message: 'React Angular Vue Svelt',
//   title: 'Nicolas'
// }

const getResult = () => {
  return "Nicolas";
}

export const FirstApp = () => {  

  return (    
    <>
      <h1>{saludo} Nicolas</h1>
      <h2>{numeros}</h2>
      <h2>{getResult()}</h2>
      {/* <h3>{ JSON.stringify( newMessage ) }</h3> */}

    </>
  )
}

