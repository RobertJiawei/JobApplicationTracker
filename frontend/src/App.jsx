import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddApplication from "./pages/AddApplication";
import AppHeader from "./components/AppHeader";
import DeleteApplication from "./pages/DeleteApplication";
import ShowApplication from "./pages/ShowApplication";
import EditApplication from "./pages/EditApplication";

function App() {
  return (
    <div>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications/create" element={<AddApplication />} />
        <Route
          path="/applications/delete/:id"
          element={<DeleteApplication />}
        />
        <Route path="/applications/details/:id" element={<ShowApplication />} />
        <Route path="/applications/edit/:id" element={<EditApplication />} />
      </Routes>
    </div>
  );
}

export default App;
