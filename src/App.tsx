import { BrowserRouter } from "react-router-dom";
import { ProductsContextProvider } from "./context/ProductContext";
import { Router } from "./Router";

export function App() {
  return (
    <ProductsContextProvider>
      <BrowserRouter basename={window.location.pathname || ""}>
        <Router />
      </BrowserRouter>
    </ProductsContextProvider>
  );
}
