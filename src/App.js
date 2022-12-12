import ThemeProvider from "./datamanager/providers/themeProvider"
import ModalProvider from "./datamanager/providers/modalProvider";
import NavigationProvider from "./datamanager/providers/navigationProvider";
import Home from "./pages/home/Home";

function App() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <NavigationProvider>
          <Home />
        </NavigationProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
