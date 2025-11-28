function Title(props) {
  return (
    <div>
      <h1 className="text-3xl text-slate-100 font-bold text-center">
        {props.children}
      </h1>
    </div>
  );
}

export default Title;
