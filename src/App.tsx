import { RouterProvider } from "react-router-dom";
import NextTopLoader from "nextjs-toploader";
import router from "./routes";

const App = () => {
  return (
    <>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
      <NextTopLoader color="#03827e" showSpinner={false} />
    </>
  );
};

export default App;
