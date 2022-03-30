
import './App.css';
import Card from './component/Card';
import News from './component/News';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Footer from './component/Footer';

function App() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
 

  
  return (
    <>
    
    <Router><Navbar />

      

          
          
          
<Switch><Route exact path="/"><Card key="top" match="Current Matches" category="results-by-date"/></Route>
            <Route exact path="/recent"><Card  key="result" match="Recent Matches" category="results" /></Route>
            <Route exact path="/upcoming"><Card key="fixture" match="Fixtures" category="fixtures"  /></Route>
            <Route exact path="/news"><News key="News"/></Route>
            </Switch>
          
          

            
            
          
         
          
        </Router>

        
        
    
        <Footer/>
    </>
   
    
    
  );
}

export default App;
