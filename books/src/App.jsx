import Book from "./components/Book";
import Booklist from "./components/booklist";
import './App.css'
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <h1>deCAACopio</h1>
      <Layout>
      <Header />
      <Booklist />
      </Layout>
      
    </>
  );
}

export default App;
