import AddArgument from "./components/addArg";
import ADM from "./components/adm";
import { Choose } from "./components/choose";

 
 

function App() {
  return (
    <div className="App">
       <ADM/>
       <AddArgument/>
       <Choose/>
       <h2 style={{marginLeft: "3rem"}}>Result is : </h2>
    </div> 
  );
}

export default App;
