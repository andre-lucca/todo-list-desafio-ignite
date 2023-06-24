import { PlusCircle } from '@phosphor-icons/react'

import clipboardImg from './assets/clipboard.png'
import logoToDo from './assets/logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <img
          className="app-logo"
          src={logoToDo} alt="Logo TO DO com um foguete azul."
        />
      </header>
      <main>
        <section className="task-creator">
          <input
            placeholder="Adicione uma nova tarefa"
            type="text" />
          <button
            className="new-task-button"
          >
            Criar
            <PlusCircle size={16} />
          </button>
        </section>
        <section className="task-list-container">
          <div className="task-list-header">
            <div className="task-stats created-tasks">
              Tarefas criadas
              <span>0</span>
            </div>
            <div className="task-stats finished-tasks">
              Concluídas
              <span>0</span>
            </div>
          </div>
          <ul className="task-container no-tasks">
            <img src={clipboardImg} />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong> <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
