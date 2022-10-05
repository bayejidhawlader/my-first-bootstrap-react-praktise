import "./App.css";
import GridCard from "./components/GridCard/GridCard";
import MyNavbar from "./components/Navbar/MyNavbar";
import MyToast from "./components/Toast/MyToast";

function App() {
  return (
    <div className="App">
      <MyNavbar></MyNavbar>
      <MyToast></MyToast>
      <GridCard></GridCard>
    </div>
  );
}

export default App;
