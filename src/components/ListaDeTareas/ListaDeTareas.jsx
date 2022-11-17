import Tarea from "../Tarea/Tarea";

const ListaDeTareas = ({issues}) => {
  console.log(issues)  
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-bold text-3xl text-center">Listado de tareas</h2>
      <p className="text-lg mt-5 text-center mb-5">
        Administra tus {''}
        <span className="font-bold text-yellow-600">Tareas 🖖</span>
      </p>

      <div className="md:h-screen md:overflow-y-scroll">
        { issues.map((issue, index) => {
            return(
                <Tarea 
                    key={index}
                    issue={issue}
                />
            )
        }) }
      </div>
    </div>
  );
};

export default ListaDeTareas;
