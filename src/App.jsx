import { useState } from "react";

import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import ListaDeTareas from "./components/ListaDeTareas/ListaDeTareas";

const App = () => {
  const deleteIssue = (id) => {
    console.log('Issue eliminado', id)
  }

  const [issues, setIssues] = useState([])
  const [issue, setIssue] = useState({})
  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          setIssues={setIssues} 
          issues={issues}
          issue={issue}
        />
        <ListaDeTareas 
          issues={issues}
          setIssue={setIssue}
          deleteIssue={deleteIssue}
        />
      </div>

    </div>
  );
};

export default App;
