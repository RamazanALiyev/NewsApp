import React  from "react";
import "./_background.scss";


function Background({handleFilterNews, focus, loading}) {
  return (
    <div className="Background">
      <p className="title">News</p>
      <div className="categoriesTitle">
        <button disabled={loading ? true : false} ref={focus} onClick={handleFilterNews} className={loading ? "categorieTitle yes" : "categorieTitle no"}>All</button>
        <button disabled={loading ? true : false} onClick={handleFilterNews} className={loading ? "categorieTitle yes" : "categorieTitle no"}>Business</button>
        <button disabled={loading ? true : false} onClick={handleFilterNews} className={loading ? "categorieTitle yes" : "categorieTitle no"}>Sports</button>
        <button disabled={loading ? true : false} onClick={handleFilterNews} className={loading ? "categorieTitle yes" : "categorieTitle no"}>World</button>
        <button disabled={loading ? true : false} onClick={handleFilterNews} className={loading ? "categorieTitle yes" : "categorieTitle no"}>Technology</button>
        <button disabled={loading ? true : false} onClick={handleFilterNews} className={loading ? "categorieTitle yes" : "categorieTitle no"}>Entertainment</button>
        <button disabled={loading ? true : false} onClick={handleFilterNews} className={loading ? "categorieTitle yes" : "categorieTitle no"}>Science</button>
      </div>
    </div>
  );
}

export default Background;
