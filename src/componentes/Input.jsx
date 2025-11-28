function Input(props) {
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full"
      {...props} //ele recria e seleciona tudo que esta dentro de input
    />
  );
}

export default Input;
