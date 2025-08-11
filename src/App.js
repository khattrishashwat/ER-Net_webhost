import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import AppRoutes from "./routes/Index";
import Loader from "./components/loader/loader";

function App() {
  return (
    <BrowserRouter basename="/web_hosting">
      {/* <Suspense fallback={<Loader />}> */}
      <AppRoutes />
      {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;
