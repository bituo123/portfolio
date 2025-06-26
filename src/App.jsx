import './App.module.scss';
import BaseLayout from "@/components/BaseLayout/BaseLayout";
import {BrowserRouter} from "react-router-dom";

function App() {
   return (
      <div>
         <BrowserRouter basename="/profile">
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;