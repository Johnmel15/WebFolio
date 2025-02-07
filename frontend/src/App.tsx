import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MainLayout } from "./layouts";
import { Home } from "./pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="scroll-smooth">
        <MainLayout>
          <Home />
        </MainLayout>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
