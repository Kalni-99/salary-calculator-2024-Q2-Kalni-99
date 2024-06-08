import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <main className="flex min-h-screen">
      <Outlet />
    </main>
  );
};

export default App;
