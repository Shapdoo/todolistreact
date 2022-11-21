import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import ListaDeTareas from "./components/ListaDeTareas/ListaDeTareas";

const App = () => {
  const [issues, setIssues] = useState([])
  const [issue, setIssue] = useState({})

  useEffect(() => {
    const issuesLS = JSON.parse(localStorage.getItem('issues'))
    setIssues(issuesLS)
  }, [])

  useEffect(() => {
    if(issues.length > 0){
      console.log('issues llenos', { issues })
      localStorage.setItem('issues', JSON.stringify(issues))
    }else{
      console.log('issues vacios')
    }
    console.log('trace issues',{ issues })
    // const setLS = () => {
    //   localStorage.setItem('issues', JSON.stringify(issues))
    // }
    // console.log('issue almacenado')
    // setLS()
  }, [issues])


  const deleteIssue = (id) => {
    const response = confirm('Deseas eliminar este paciente')

    if(response){
      const issuesUpdated = issues.filter(issueState => issueState.id !== id)
      setIssues(issuesUpdated)
    }
  }

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
