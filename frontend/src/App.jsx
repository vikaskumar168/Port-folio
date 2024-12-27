import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="bg-slate-900">
        <Navbar />
        <Introduction />
        <Skills />
        <Resume />
        <Contact />
      </div>
    </>
  );
}

export default App;