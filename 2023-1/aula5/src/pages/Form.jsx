import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div>
        <form>
            <label>
                <span>Nome:</span>
                <input type="text" name="nome" id="nome" placeholder='Nome Completo'/>
            </label>
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" id="email" placeholder='nome@site.com'/>
            </label>
            <label>
                <span>Mensagem:</span>
                <textarea name="msg" id="msg" placeholder='Escreva aqui...' cols="30" rows="10"></textarea>
            </label>
        </form>

    </div>
  )
}

export default Form