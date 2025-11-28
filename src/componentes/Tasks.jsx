import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  //Recebe toda a lista como parametro
  const navigate = useNavigate();

  function OnseeDetailsClick(task) {
    const query = new URLSearchParams(); //cria uma URL de forma segura e que não possa conter erros
    query.set("title", task.title); //title recebe task.title como parametro
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`); //define tudo para string
  }
  return (
    <div>
      {/* <h1>{props.tasks[0].title}</h1>*/}
      {/*Pega tarefa na posição 0, porém pega só o título */}

      <ul className="space-y-4 p-6 mt-10 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-4">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 w-full text-white p-2 rounded-md ${
                task.isCompleted && "line-through" //aparece uma linha no texto
              }`}
            >
              {task.title}
            </button>
            <Button onClick={() => OnseeDetailsClick(task)}>
              <ChevronRightIcon />
            </Button>

            <Button onClick={() => onDeleteTaskClick(task.id)}>
              <TrashIcon />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
