import React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from '../FormLoginAndRegister/Form.module.css'
import imageForm from '../../assets/img/undraw_shopping_app_flsj.png'
import { auth } from '../../services/firebase.js'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

const Form = ({ titleForm, buttonForm }) => {

  const signIn = (e) => {
    e.preventDefault()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);
  
    const handleSignIn = () => {
      createUserWithEmailAndPassword(email, password)
    }

  }

  return (
      <div className={styles.formContainer}>
        <aside>
          <img src={imageForm} alt='imagem do formulário' className={styles.imageForm}/>
        </aside>
        <form className={styles.formContent}>
          <h1>{titleForm}</h1>
          <hr className={styles.underlineTitle}/>
          <div className={styles.nameArea}>
            <label className={styles.labelForm}>Nome</label>
            <input type='name' placeholder='Digite seu nome' className={styles.inputForm}/>
          </div>

          {
            location.pathname === '/register' && <div>
              <div className={styles.emailArea}>
                <label className={styles.labelForm}>E-mail</label>
                <input onChange={(e) => setEmail(e.target.value)}type='email' placeholder='Digite seu e-mail' className={styles.inputForm}/>
              </div>
              <div className={styles.registerInputs}>
                <div className={styles.phoneArea}>
                  <label className={styles.labelForm}>Telefone</label>
                  <input type='number' placeholder='Digite seu telefone' className={styles.inputForm}/>
                </div>
                <div className={styles.phoneArea}>
                <label className={styles.labelForm}>Endereço</label>
                  <input type='text' placeholder='Digite seu endereço' className={styles.inputForm}/>
                </div>
              </div>
            </div>
          }
          <div className={styles.passwordArea}>
            <label className={styles.labelForm}>Senha</label>
            <input type='password' placeholder='Digite sua senha' className={styles.inputForm} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className={styles.passwordArea}>
            {
            location.pathname === '/register' && <div>
            <label className={styles.labelForm}>Confirmar senha</label>
            <input type='password' placeholder='Confirme sua senha' className={styles.inputForm} />
            </div>
            }
          </div>
          <div className={styles.showPassword}>
              <input type='checkbox'/>
              <label>Mostrar senha</label>
          </div>
          <button onClick={signIn} type='submit' className={styles.buttonForm}>{buttonForm}</button>
          {
          location.pathname === '/login' ?
          <p>Não tem uma conta? <Link to='/register' className={styles.linkForm}>Registrar-se</Link></p> :
          <p>Já tem uma conta? <Link to='/login' className={styles.linkForm}>Entrar</Link></p>
          }
        </form>
      </div>
  )
}

export default Form