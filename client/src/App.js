import { Route, Routes } from "react-router-dom";
import { SensorDataContextProvider } from "./context/SensorDataContextProvider";
import Dashboard from "./components/dashboard/Dashboard";
import Graphs from "./components/plots/Graphs";
import Main from "./Main";
import Guide from "./components/guide/Guide";

const App = () => {
  return (
    <SensorDataContextProvider>
      <Main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/insights" element={<Graphs />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Main>
    </SensorDataContextProvider>
  );
};

export default App;
