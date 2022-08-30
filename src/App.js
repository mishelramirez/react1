
import './App.css';
import Testimonio from "./componentes/Testimonio"

function App() {
  return (
    <div className="App">

      <div>
      <h1>esto es lo que dicen los alumnos</h1>
     <Testimonio 
     nombre="Yesid Ramirez"
     pais="colombia"
     imagen="foto1"
     alt="foto de yesid"
     cargo="constructor"
     empresa="familya asociados"
     testimonio="te about  Lorem Ipsum 
     , giving information on its origins, as well as a random Lipsum"
     />
       <Testimonio 
     nombre="Olduar Uribe"
     pais="francia"
     imagen="foto2"
     alt="foto de olduar"
     cargo="Ingeniero "
     empresa="familya asociados"
     testimonio="te about Lorem Ipsum, giving information on its origins, as well as a random Lipsum"
     />
        <Testimonio 
     nombre="Nora Mendez"
     pais="inglaterra"
     imagen="foto3"
     alt="foto de Nora"
     cargo="Gerente "
     empresa="familya asociados"
     testimonio="te about Lorem Ipsum, giving information on its origins, as well as a random Lipsum"
     />
     </div>
    </div>
  );
}

export default App;
