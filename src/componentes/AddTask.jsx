import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 mt-10 bg-slate-200 rounded-md shadow ">
      <Input
        type="text"
        placeholder="Digite o título"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      {/*px horizontal e py vertical, graficos de matemática eixo x e y*/}
      <Input
        type="text"
        placeholder="Digite a descrição"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha os campos!");
          }
          onAddTaskSubmit(title, description);

          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium w-full"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
