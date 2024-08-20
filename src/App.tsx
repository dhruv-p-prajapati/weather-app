import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import { Suspense } from "react";
import Loading from "./components/common/Loading";

const App = () => {
  const router = Routes();
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
