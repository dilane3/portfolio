import ModalProvider from "./datamanager/providers/modalProvider";
import NavigationProvider from "./datamanager/providers/navigationProvider";
import Home from "./pages/home/Home";

function App() {
  return (
    <ModalProvider>
      <NavigationProvider>
        <Home />
      </NavigationProvider>
    </ModalProvider>
  );
}

export default App;
