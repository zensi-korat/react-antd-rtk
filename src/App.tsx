import { RouterProvider } from "react-router-dom";
import router from "src/routes/router";
import { ThemeProvider } from "./context/ThemeContext";
import GlobalStyle from "./config/global.style";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
