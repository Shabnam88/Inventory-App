import InventoryApp from "./components/InventoryApp";
import InventoryHeader from "./components/InventoryHeader";
import Providers from "./components/Providers";

function App() {
  return (
    <Providers>
      <div className="bg-secondary-800 min-h-screen">
        <InventoryHeader />
        <InventoryApp />
      </div>
    </Providers>
  );
}

export default App;
