import Button from "../Button/Button";

const Tarea = ({ issue, setIssue, deleteIssue }) => {

  //Funcion de editar
  const edit = () => {
    setIssue(issue);
  };

  //Funcion de eliminar
  const remove = () => {
    deleteIssue(issue.id);
  };

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
          {(issue.prio === "low" && "🟢 Low") ||
            (issue.prio === "medium" && "🟡 Medium") ||
            (issue.prio === "high" && "🔴 High")}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Detalle: {""}
        <span className="font-normal normal-case">{issue.detail}</span>
      </p>

      <div className="mt-5 flex gap-3 flex-col md:flex-row justify-between">
        <Button
          bg="bg-yellow-500"
          hover="hover:bg-yellow-600"
          width="w-3/4"
          color="text-white"
          handleClick={edit}
        >
          Editar
        </Button>

        <Button
          bg="bg-red-500"
          hover="hover:bg-red-700"
          width="w-3/4"
          color="text-white"
          habdleClick={remove}
        >
          Eliminar
        </Button>
      </div>
    </div>
  );
};

export default Tarea;
