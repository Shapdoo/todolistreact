const Tarea = ({ issue }) => {
  return (
    <div className="m-3 bg-white shadow-md rounded-xl py-10 px-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">    
        Tarea: {""}
        <span className="font-normal normal-case">{issue.name}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Responsable: {""}
        <span className="font-normal normal-case">{issue.employee}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: {""}
        <span className="font-normal normal-case">{issue.date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Prioridad: {""}
        <span className="font-normal normal-case">
          {
            issue.prio === 'low' && '🟢 Low' || 
            issue.prio === 'medium' && '🟡 Medium' || 
            issue.prio === 'high' && '🔴 High'
          }
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Detalle: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          suscipit aut neque eius, molestiae exercitationem quaerat, dolore modi
          aliquid harum dicta corrupti sed deleniti vero ex itaque ducimus alias
          hic?
        </span>
      </p>
    </div>
  );
};

export default Tarea;
