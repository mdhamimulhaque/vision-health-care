import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes/routes';




function App() {
  return (
    <div className="App max-w-[1600px] mx-auto">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
