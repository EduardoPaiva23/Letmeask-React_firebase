import { BrowserRouter, Route} from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

import { AuthContextProvider } from '../src/contexts/AuthContexts'

function App() {
  return (
   <BrowserRouter>
    <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/Room/new" component={NewRoom} />
        <Route path="/Room/:id" component={Room} />
    </AuthContextProvider>
   </BrowserRouter>
  );
}

export default App;
