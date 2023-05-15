import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { initialFacts } from "./data";
import { supabase } from "./supabase";

function App() {
  const [isShown, setIsShown] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    async function getFacts() {
      setIsLoading(true);

      let query = supabase.from("facts").select("*");

      if (currentCategory !== "all")
        query = query.eq("category", currentCategory);
      const { data: facts, error } = await query
        .order("votesInteresting", { ascending: false })
        .limit(100);

      if (!error) setFacts(facts);
      else alert("There was a problem getting data");
      setIsLoading(false);
    }
    getFacts();
  }, [currentCategory]); //re-renders every time user clicks a different category
  return (
    <main>
      <Layout
        isShown={isShown}
        setIsShown={setIsShown}
        facts={facts}
        setFacts={setFacts}
        isLoading={isLoading}
        setCurrentCategory={setCurrentCategory}
      />
    </main>
  );
}

export default App;
