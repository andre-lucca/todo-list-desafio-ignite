import { useRef, useState } from 'react'
import {
  PlusCircle,
  CheckCircle,
  Circle,
  Trash
} from '@phosphor-icons/react'

import clipboardImg from './assets/clipboard.png'
import logoToDo from './assets/logo.svg'
import './App.css'

type Task = {
  id: number,
  done: boolean,
  description: string
}

function App() {
  const taskInputRef = useRef<HTMLInputElement>(null)
  const [tasks, setTasks] = useState<Task[]>([])

  const handleAddTask = (): void => {
    const taskInput = taskInputRef.current as HTMLInputElement

    const newTask: Task = {
      id: tasks.length + 1,
      done: false,
      description: taskInput.value
    }

    setTasks([...tasks, newTask])
  }

  const handleToggleTask = (task: Task, taskIndex: number): void => {
    const newTasks = [...tasks]

    newTasks[taskIndex] = {
      ...task,
      done: !task.done
    }

    setTasks(newTasks)
  }

  const mapTask = (task: Task, taskIndex: number) => {
    const taskClass = task.done ? 'task done' : 'task'
    const iconBgClass = task.done ? 'done-icon-bg' : 'undone-icon-bg'
    const iconClass = task.done ? 'done-icon' : 'undone-icon'

    return (
      <li
        key={task.id}
        className={taskClass}
      >
        <div
          className="icon-container"
          onClick={() => handleToggleTask(task, taskIndex)}
        >
          <div className={iconBgClass} />
          {
            task.done
              ? <CheckCircle
                className={iconClass}
                weight="fill"
                size={24} />

              : <Circle
                className={iconClass}
                size={24} />
          }
        </div>
        <p>
          {task.description}
        </p>
        <div className="trash-icon-container">
          <Trash
            className="trash-icon"
            size={24}
          />
        </div>
      </li>
    )
  }

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
            ref={taskInputRef}
            placeholder="Adicione uma nova tarefa"
            type="text" />
          <button
            className="new-task-button"
            onClick={handleAddTask}
          >
            Criar
            <PlusCircle size={16} />
          </button>
        </section>
        <section className="task-list-container">
          <div className="task-list-header">
            <div className="task-stats created-tasks">
              Tarefas criadas
              <span>
                {
                  tasks.length
                }
              </span>
            </div>
            <div className="task-stats finished-tasks">
              Concluídas
              <span>
                {
                  tasks.length > 0
                    ? `${tasks.filter(task => task.done).length} de ${tasks.length}`
                    : 0
                }
              </span>
            </div>
          </div>
          <ul className={`task-container ${tasks.length < 1 && 'no-tasks'}`}>
            {
              tasks.length > 0
                ? (
                  tasks.map(mapTask)
                ) : (
                  <>
                    <img src={clipboardImg} />
                    <p>
                      <strong>Você ainda não tem tarefas cadastradas</strong> <br />
                      Crie tarefas e organize seus itens a fazer
                    </p>
                  </>
                )
            }
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
