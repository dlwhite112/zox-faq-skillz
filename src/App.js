import "./App.css";
import Accordion from "./components/Accordion";
import { orderingQuestions }  from "./utils/ordering"
import Heading from "./components/Heading";

function App() {
  return (
    <div>
      <h1>ZOX FAQs</h1>
      <Heading heading="Ordering" />
      <div className="accordion">
        {orderingQuestions.map(({ id, title, content }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default App;
