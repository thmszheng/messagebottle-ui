import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import Homepage from "./components/Homepage";
import "./App.css";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Homepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
