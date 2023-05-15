import React from "react";
import Categories from "./Categories";
import Facts from "./Facts";
import Loader from "./Loader";

import Form from "./Form";
import Header from "./Header";

const Layout = ({
  setIsShown,
  isShown,
  facts,
  setFacts,
  isLoading,
  setCurrentCategory,
}) => {
  return (
    <div className="container">
      <Header setIsShown={setIsShown} isShown={isShown} />

      {isShown ? <Form setFacts={setFacts} setIsShown={setIsShown} /> : null}
      <main className="main">
        <aside>
          <Categories setCurrentCategory={setCurrentCategory} />
        </aside>

        <section className="section-facts">
          {isLoading ? <Loader /> : <Facts facts={facts} setFacts={setFacts} />}
        </section>
      </main>
    </div>
  );
};

export default Layout;
