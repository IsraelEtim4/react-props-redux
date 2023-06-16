import './App.css';
import NewComponent from './NewComponent';
import Classprops from './Classprops';
import Functionprops from './Functionprops';
import Script from './Edureka/script'
import Apps from './State/Apps';
import React from 'react';
import { Header } from './Edureka/script';
import { Footer } from './Edureka/script';
import Bulb from './Edureka/eventscript';
import RefScript from './Edureka/refscript';
import { Ref } from './Edureka/Form';
import NewComp from './State/NewComp';


function App() {

  return (
    
    <div>
      <NewComponent/>
      <br/>
      <NewComp/>
      <p/>
      <Ref/>
      <RefScript/>
      <Bulb />
      <Header name = "Alex" />
      <Header name = "Max" />
      <Footer />
      <Apps />
      <br/>
      <h3>Sum is : {4+5}</h3>
      <Classprops name = " Leaarner 1" place="Calabar">
        <p>Child Component</p>
      </Classprops>
      <Classprops name = " Leaarner 2" place="Ikot Ekpene">
        <button>Click</button>
      </Classprops>
      <Classprops name = " Leaarner 3" place="Benin" />
      <Functionprops name = " Learner 4" place="Uyo" />
      <Script />
    </div>
  );    
  
}

export default App;
