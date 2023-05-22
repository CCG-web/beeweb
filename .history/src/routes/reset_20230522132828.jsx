import React from 'react'

const reset = () => {
  return (
    <div className="row">
      <div className="col colOne">
        <img src={logoLogin} alt="Imagem de exemplo"  className='center-image'/>
      </div>
      <div className="col colTwo">
        <div className='Formcontainer'>
        <h1 className='login'>login</h1>
        <form>
          <input type="email" name="email" placeholder="E-mail" className='email' />
   
        </form>
       
      </div>
    </div>
    </div>
  )
}

export default reset