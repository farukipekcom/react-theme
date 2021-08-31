import "./App.css";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import Container from "./components/OnePage";
import { theme1, theme2, theme3, theme4, theme5, theme6 } from "./theme";
function App() {
  const colorMode = useSelector((state) => state.theme.colorMode);
  const selectedTheme = JSON.parse(localStorage.getItem("theme"));
  const selected = () => {
    if (selectedTheme === "theme1") {
      return theme1;
    } else if (selectedTheme === "theme2") {
      return theme2;
    } else if (selectedTheme === "theme3") {
      return theme3;
    } else if (selectedTheme === "theme4") {
      return theme4;
    } else if (selectedTheme === "theme5") {
      return theme5;
    } else if (selectedTheme === "theme6") {
      return theme6;
    } else {
      return theme1;
    }
  };
  return (
    <ThemeProvider theme={selected()}>
      <Container />
    </ThemeProvider>
  );
}
export default App;
