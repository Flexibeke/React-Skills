function Button(props) {
  return (
    <div>
      <button {...props} className="bg-slate-400 p-2 rounded-md text-white">
        {props.children}
        {/*É o que eu paço para dentro do botão como visualização, ex: icones*/}
      </button>
    </div>
  );
}

export default Button;
