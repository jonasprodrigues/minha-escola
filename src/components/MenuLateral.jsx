import './MenuLateral.css'
import { useNavigate } from 'react-router-dom'

function MenuLateral() {

{/* COMENTARIO: Adicionei a função sair para redirecionar o usuário para a página de login ao clicar no botão de sair 
*/ }

    const navegar = useNavigate()
  
    function PaginaAlunos() {
    navegar('/alunos')
    }

    function sair() {
    navegar('/')
    }


    return (
        <aside className="menu-lateral">
            <h2>Menu</h2>
            <ul>
                <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a href="#" onClick={PaginaAlunos}>Alunos</a>
                </li>
                <li>
                    <a href="#">Professores</a>
                </li>
            </ul>


{/* COMENTARIO: Adicionei um botão de sair para permitir que o usuário saia do sistema 
*/}

            <br />
            <button onClick={sair}>
                Sair
            </button>

        </aside>
    )
}



export default MenuLateral