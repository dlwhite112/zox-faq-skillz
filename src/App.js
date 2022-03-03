import "./App.css";
import Accordion from "./components/Accordion";
import category1 from "../src/utils/category1.json"
import Heading from "./components/Heading";

function App() {
  return (
    <div>
      <h1>ZOX FAQs</h1>
      <Heading heading="heading1" />
      <div className="accordion">
        {category1.map(({ id, title, content }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default App;
