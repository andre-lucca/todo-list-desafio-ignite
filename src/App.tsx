import { PlusCircle } from '@phosphor-icons/react'

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
            <p>
              Tarefas criadas
              <span></span>
            </p>
            <p>
              Concluídas
              <span></span>
            </p>
          </div>
          <ul className="task-container">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, aut!</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab eveniet adipisci cumque saepe assumenda.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
