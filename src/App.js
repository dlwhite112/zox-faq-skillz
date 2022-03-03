import "./App.css";
import Heading from "./components/Heading";
import Accordion from "./components/Accordion";
import { orderingQuestions } from "./utils/ordering";
import { shippingQuestions } from "./utils/shipping";
import { accountQuestions } from "./utils/account";
import { loyaltyProgramQuestions } from "./utils/loyalty-program";
import { zoxpassQuestions } from "./utils/zoxpass";
import { productInformationQuestions } from "./utils/product-information";
import { monthlySubscriptionsQuestions } from "./utils/monthly-subscriptions";
import { returnsAndExchangesQuestions } from "./utils/returns-&-exchanges";
import { rewardsQuestions } from "./utils/rewards";

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
      <Heading heading="Shipping" />
      <div className="accordion">
        {shippingQuestions.map(({ id, title, content }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </div>
      <Heading heading="Account" />
      <div className="accordion">
        {accountQuestions.map(({ id, title, content }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </div>
      <Heading heading="Loyalty Program" />
      <div className="accordion">
        {loyaltyProgramQuestions.map(({ id, title, content }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </div>
      <Heading heading="ZOXPASS" />
      <div className="accordion">
        {zoxpassQuestions.map(({ id, title, content }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </div>
      <Heading heading="Product Information" />
      <div className="accordion">
        {productInformationQuestions.map(({ id, title, content }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </div>
      <Heading heading="Monthly Subscriptions" />
      <div className="accordion">
        {monthlySubscriptionsQuestions.map(({ id, title, content }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </div>
      <Heading heading="Returns &amp; Exchanges" />
      <div className="accordion">
        {returnsAndExchangesQuestions.map(({ id, title, content }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </div>
      <Heading heading="Rewards" />
      <div className="accordion">
        {rewardsQuestions.map(({ id, title, content }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default App;
