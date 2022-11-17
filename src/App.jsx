import { useState } from "react";

import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import ListaDeTareas from "./components/ListaDeTareas/ListaDeTareas";

const App = () => {

  const [issues, setIssues] = useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          setIssues={setIssues} 
          issues={issues}
        />
        <ListaDeTareas 
          issues={issues}
        />
      </div>

    </div>
  );
};

export default App;
