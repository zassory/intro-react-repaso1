
import './styles.css'


export const FirstApp = ( { title = 'Hola, soy goku!!!' , subTitle } ) => {



  return (    
    <>
      <h1>{ title }</h1>
      <h2>{ subTitle + 1 }</h2>
      {/* <h3>{ JSON.stringify( newMessage ) }</h3> */}

    </>
  )
}

