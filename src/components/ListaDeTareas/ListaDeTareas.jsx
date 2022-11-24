import { useEffect } from "react";

import Tarea from "../Tarea/Tarea";
import Label from "../Label/Label";

const ListaDeTareas = ({ issues, setIssue, deleteIssue }) => {
  // useEffect(() => {
  //   if(issues.length <= 0){
  //     return
  //   }
  //   console.log('nuevo issue')
  // }, [issues])

  /**
   * Retorna un componente Label con un mensaje diferente
   * @returns {JSX} JSX element
   */
  const textBehavior = () => {
    if (issues.length <= 0) {
      return (
        <Label>
          <>
            Lista tus {""}
            <span className="font-bold text-yellow-600">Tareas 🖖</span>
          </>
        </Label>
      );
    }

    return (
      <Label>
        <>
          Administra tus {""}
          <span className="font-bold text-yellow-600">Tareas 🖖</span>
        </>
      </Label>
    );
  };

  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-bold text-3xl text-center">Listado de tareas</h2>
      {textBehavior()}
      <div className="md:h-screen md:overflow-y-scroll">
        {issues.map((issue) => {
          return (
            <Tarea
              key={issue.id}
              issue={issue}
              setIssue={setIssue}
              deleteIssue={deleteIssue}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListaDeTareas;
