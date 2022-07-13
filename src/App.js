import ModalProvider from "./datamanager/providers/modalProvider";
import Home from "./pages/home/Home";

function App() {
  return (
    <ModalProvider>
      <Home />
    </ModalProvider>
  );
}

export default App;
