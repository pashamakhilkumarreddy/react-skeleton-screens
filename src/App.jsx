import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import AppRoutes from "./routes";

const App = () => {
  return (
    <>
      <PageHeader />
      <main className="container my-4">
        <AppRoutes />
      </main>
      <PageFooter />
    </>
  );
};

export default App;
