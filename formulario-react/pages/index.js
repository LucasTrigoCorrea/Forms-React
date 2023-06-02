import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useEffect, useState} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginState, setLoginState] = useState({
    email: '',
    password: ''
  })

  const [search, setSearch] = useState('')

  const handleSignupForm = (event) => {
    event.preventDefault()
    console.log({name, email, password})

  }

  const handleOnChangeLogin = (event, key) => {
    setLoginState({...loginState, [key]: event.target.value})
  }

  const handleLoginForm = (event) => {
    event.preventDefault()
    console.log(loginState)
  }

  useEffect(() => {
    if (search.length > 2){
      console.log(`'Realizando busca para '${search}'`)
    }
  }, [search])

  
  return (
    <>
      <Head>
        
        <title>Forms React.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSignupForm} >
          <h1>Formulario de Cadastro</h1>
          <input 
          type='text' 
          placeholder='Seu Nome' 
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          />
          <input 
          type='email'
          placeholder='E-mail' 
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />
          <input 
          type='password' 
          placeholder='Senha' 
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          />
          <button type='submit'>Enviar</button>  
        </form>

        <form className={styles.form} onSubmit={handleLoginForm}>
        <h1>Formulario de Login</h1>
          <input 
          type='email'
          placeholder='E-mail' 
          required
          value={loginState.email}
          onChange={(event) => handleOnChangeLogin(event, 'email')}
          
          />
          <input 
          type='password' 
          placeholder='Senha' 
          required
          value={loginState.password}
          onChange={(event) => handleOnChangeLogin(event, 'password')}
          /> 

          <button type='submit'>Entrar</button>
          
        </form>

        <form className={styles.form}>
          <h1>Formulario de Busca Automática</h1>
          <input 
          type='text' 
          placeholder='Digite Sua Busca'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          />
        </form>
        </div>
     
    </>
  )
}
