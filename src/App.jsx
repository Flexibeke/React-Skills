import Tasks from "./componentes/Tasks";
import AddTask from "./componentes/AddTask";
import Title from "./componentes/Title";
import { v4 } from "uuid"; //Biblioteca para gerar ids aleatórios uuid@10.0.0
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [] //aqui JSON.parse ele pega o texto transformado e o transforma novamente para objeto
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); //JSON é um objeto porém tudo texto, e com stringify ele transforma todo o objeto para texto
  }, [tasks]); //toda vez que tasks for alterado ele vai executar a função

  //Uso de API fake
  //Se descomentada ela utiliza a API

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     //chamar API
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     //Pegar os dados que ela retorna
  //     const data = await response.json();

  //     //armazenar ou persistir esses dados no state
  //     setTasks(data);
  //   };
  //   fetchTasks();
  // }, []); //Se vazia ela só acontece no primeiro acesso do web site

  function onTaskClick(taskid) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskid) {
        return { ...task, isCompleted: !task.isCompleted }; //... cria e copia todas as informações
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskid) {
    const newTasks = tasks.filter((task) => task.id !== taskid);

    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(), //gera ids aleatórios com a Biblioteca
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  //Com tailwind não preciso definir justify-content: ..., somente coloco o que quero e ele já sabe o que é, exemplos abaixo
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      {/*   no div com tailwind seguindo a ordem suas respostas:w-s e h-s ocupan a largura toda da tela, 
        bg é a cor cinza, display:flex, justify-content: center e padding:6px*/}
      <div className="w-[500px] space-y-4">
        {/* w-[] define a largura ,text-... define tamanho desejado x 10 */}

        <Title>Gerenciador de Tarefas</Title>

        <AddTask onAddTaskSubmit={onAddTaskSubmit} />

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
        {/* Envia estas informações para o Tasks.jsx */}
      </div>
    </div>
  );
}

export default App;
