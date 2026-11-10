import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import './Dashboard.css'
import Cabecalho from '../components/Cabecalho'
import MenuLateral from '../components/MenuLateral'
import Botao from '../components/Botao'
import CampoTexto from '../components/CampoTexto'
import CartaoIndicador from '../components/CartaoIndicador'
import Alunos from './Alunos'
import PaginaLayout from '../components/PaginaLayout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* Teste de codigo
*/}

      <PaginaLayout>
{/* Teste de codigo
      <Cabecalho />
      <div className="layout">
      <MenuLateral />
*/}



        <main className="conteudo">
          <h2>Dashboard</h2>
          <p>Bem-vindo ao sistema!</p>
          <div className="indicadores">
            <CartaoIndicador
            titulo="Total de alunos"
            valor="120"
            />
            <CartaoIndicador
            titulo="Total de professores"
            valor="15"
            />
            <CartaoIndicador
            titulo="Avaliações realizadas"
            valor="85"
            />
          </div>

          <Botao>Novo Aluno</Botao>
        </main>

{/* Teste de codigo
      </div>
      <CampoTexto
      label="Cadastre seu E-mail para receber nossas
      novidades:"
      tipo="email"
      />
      <Botao>Cadastrar</Botao>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
*/}
      </PaginaLayout>
    </>
  )
}

export default App
