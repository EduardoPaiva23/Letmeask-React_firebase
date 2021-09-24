import { BrowserRouter, Route} from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from '../src/contexts/AuthContexts'

function App() {
  return (
   <BrowserRouter>
    <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/Room/new" component={NewRoom} />
    </AuthContextProvider>
   </BrowserRouter>
  );
}

export default App;
