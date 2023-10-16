import "./App.css";
import HackerNews from "./component/news/HackerNews";
// import { GlobalStyles } from "./GlobalStyles";
// import CardList from "./component/card/CardList";
// import { ThemeProvider } from "styled-components";
// import CardTailwind from "./component/card/CardTailwind";
// import Photos from "./component/photo/Photos";
// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
// };
function App() {
  return (
    <div>
      <HackerNewsReducer></HackerNewsReducer>
    </div>
  );
}
export default App;
