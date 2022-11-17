import { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Formulario = ({ issues, setIssues }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [prio, setPrio] = useState("");
  const [detail, setDetail] = useState("");
  const [employee, setEmployee] = useState("");
  const [self, setSelf] = useState(false);
  const [error, setError] = useState(false);
  

  //CUANDO EL USUARIO SELECCIONE EL ASIGNARME A MI MISMO SE SETEA EL VALOR DEL EMPLOYEE
  const handleSelf = () => {
    setSelf(!self);

    if (self === true) {
      setEmployee("");
    } else {
      setEmployee("Yo");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, employee, priority, date, detail].includes("")) {
      console.log("al menos un campo vacío");
      setError(true);
      return;
    }

    const tarea = {
      name,
      date,
      prio,
      employee,
      detail,
    };

    setIssues([...issues, tarea]);

    //Reiniciando el formulario
    setName("");
    setDate("");
    setPrio("none");
    setDetail("");
    setEmployee("");
    setError(false);
    setSelf(false);
  };

  return (
    <div className="m-3 md:w-1/2 lg:w-2/5 mb-5">
      <h2 className="font-black text-3xl text-center">
        Registra tus tareas aquí 📚
      </h2>
      <p className="text-lg mt-5 text-center mb-5">
        Añade tus <span className="text-yellow-600 font-bold">tareas</span> 👌
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5"
        onSubmit={handleSubmit}
      >
        {error && <ErrorMessage><p>😠 ¡Falta llenar Campos en el formulario!</p></ErrorMessage>}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="font-bold text-gray-700 block uppercase"
          >
            📎 Tarea
          </label>
          <input
            name="name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="nombre de la tarea..."
            id="name"
            checked={self === false && false }
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="employee"
            className="font-bold text-gray-700 block uppercase"
          >
            👥 Asignar
          </label>
          <input
            name="employee"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md disabled:opacity-75"
            type="text"
            placeholder="Asigna la tarea a una persona externa"
            id="employee"
            value={employee}
            disabled={self ? true : false}
            onChange={(e) => setEmployee(e.target.value)}
          />

          <div className="flex flex-row-reverse items-center gap-2 mt-2">
            <label htmlFor="self">Asignarme a mi mismo</label>
            <input
              value={self}
              name="self"
              className="checked:bg-green-600"
              type="checkbox"
              id="self"
              onChange={handleSelf}
              //   onChange={ () => setSelf(!self) }
            />
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="date"
            className="font-bold text-gray-700 block uppercase"
          >
            🗓 Fecha
          </label>
          <input
            name="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            placeholder="fecha de la tarea..."
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="priority"
            className="font-bold text-gray-700 block uppercase"
          >
            🚥 Prioridad
          </label>
          <select
            id="priority"
            name="priority"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={prio}
            onChange={(e) => setPrio(e.target.value)}
          >
            <option value="none" hidden>
              Seleccione la prioridad
            </option>
            <option value="low">🟢 Low</option>
            <option value="medium">🟡 Medium</option>
            <option value="high">🔴 High</option>
          </select>
        </div>

        <div className="mb-5">
          <label
            htmlFor="detail"
            className="font-bold text-gray-700 block uppercase"
          >
            📝 Detalle de la tarea
          </label>
          <textarea
            id="detail"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            className="w-full border-2 p-2 mt-2 placeholder-gray-400"
            placeholder="Aqui va la descripcion de la tarea..."
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-blue-700 w-full p-3 uppercase font-bold text-white hover:bg-green-500 cursor-pointer transition-all"
          value="✅ Listar tarea"
        />
      </form>
    </div>
  );
};

export default Formulario;
