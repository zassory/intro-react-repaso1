import PropTypes from 'prop-types';

import './styles.css'


export const FirstApp = ( { title , subTitle , name } ) => {
    


  return (    
    <>
      <h1>{ title }</h1>
      <h2>{ subTitle  }</h2>
      <h3>{ name }</h3>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 2210153,
  name: 'Nicolas Caceres'
}