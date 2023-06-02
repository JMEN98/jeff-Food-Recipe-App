
import './App.css';
import Meal from './Components/Meal';
import Recipe from'./Components/Recipe'
import './Components/Style.css';
import{Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
   <Routes>
      <Route  path="/" element={<Meal/>}/>
      <Route exact path="/:recipeId" element={<Recipe/>}/>
     
      </Routes>
    
    </div>
  );
}

export default App;
