const Button = (props) => {
  return (
    <button
      onClick={() => props.handleClick()}
      type="button"  
      className={`
        ${props.bg} 
        ${props.color} 
        ${props.hover} 
        md:${props.width} 
        py-2 px-10 uppercase font-bold cursor-pointer transition-all rounded-lg`}
    >
      {props.children}
    </button>
  );
};

export default Button;
