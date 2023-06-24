import {
  PlusCircle,
  CheckCircle,
  Circle,
  Trash
} from '@phosphor-icons/react'

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
          <ul className="task-container .no-tasks">
            {/* <img src={clipboardImg} />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong> <br />
              Crie tarefas e organize seus itens a fazer
            </p> */}
            <li className="task">
              <div className="icon-container">
                <div className="undone-icon-bg" />
                <Circle
                  className="undone-icon"
                  size={24}
                />
              </div>
              <p>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
              </p>
              <div className="trash-icon-container">
                <Trash
                  className="trash-icon"
                  size={24}
                />
              </div>
            </li>
            <li className="task done">
              <div className="icon-container">
                <div className="done-icon-bg" />
                <CheckCircle
                  className="done-icon"
                  weight="fill"
                  size={24}
                />
              </div>
              <p>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
              </p>
              <div className="trash-icon-container">
                <Trash
                  className="trash-icon"
                  size={24}
                />
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
