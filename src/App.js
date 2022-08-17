import Background from "./components/Background/Background";
import Home from "./Pages/Home/Home";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function App() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("all");
  const focus = useRef();
  useEffect(() => {
    axios
      .get(`https://inshorts.deta.dev/news?category=${value.toLowerCase()}`)
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch(function (error) {
        toast.error("Error notification!");
      });
  }, [value]);
  useEffect(() => {
    focus.current.focus();
  }, []);
  const handleFilterNews = (e) => {
    e.preventDefault();
    setLoading(true);
    setValue(e.target.textContent);
  };
  return (
    <div className="App">
      <Background
        loading={loading}
        focus={focus}
        handleFilterNews={handleFilterNews}
      />
      <Home loading={loading} categories={categories} />
    </div>
  );
}

export default App;
