import React, { useState } from "react";
import { CATEGORIES } from "../data";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { supabase } from "../supabase";

const Form = ({ setFacts, setIsShown }) => {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;

  const submit = async (e) => {
    e.preventDefault();
    if (text && source && category && text.length <= 200) {
      // const newFact = {
      //   id: Math.round(Math.random() * 10000000),
      //   text,
      //   source,
      //   category,
      //   votesInteresting: 0,
      //   votesMindblowing: 0,
      //   votesFalse: 0,
      //   createdIn: new Date().getFullYear(),
      // };
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([{ text, source, category }])
        .select();

      setIsUploading(false);
      setFacts((prevFacts) => [...prevFacts, newFact[0]]);

      setText("");
      setSource("");
      setCategory("");

      setIsShown(false);
    }
  };

  return (
    <form onSubmit={submit} className="fact-form">
      <input
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}
      />
      <span>{200 - textLength}</span>
      <input
        value={source}
        type="text"
        placeholder="Trustworthy source..."
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
      />

      <FormControl>
        <InputLabel
          id="demo-simple-select-label"
          style={{ color: "#fafaf9", overflow: "visible" }}
        >
          Category
        </InputLabel>
        <Select
          disabled={isUploading}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
          style={{
            appearance: "transparent",
            backgroundColor: "#3b82f6",
            color: "#fafaf9",
            borderRadius: "3rem",
            fontSize: "1.6rem",
            fontFamily: "Coiny",
          }}
        >
          <MenuItem value="">Choose Category</MenuItem>

          {CATEGORIES.map(({ name }) => (
            <MenuItem key={name} value={name}>
              {name.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <button type="submit" className="btn btn-large" disabled={isUploading}>
        Post
      </button>
    </form>
  );
};

export default Form;
