import { useState } from "react";
import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Blogs from "./components/Header/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  //  book mark button  fun propsDril
   const [bookmarks, setBoomarks] = useState ([]);

  // //  evenHandler
   const handleAddToBookmark = blog =>{
     const newBookmarks =[...bookmarks, blog];
     setBoomarks(newBookmarks);
  
   }
  return (
    <>
     
     <Header></Header>
     <div className="md:flex max-w-7xl mx-auto">
     <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
    </>
  );
}

export default App;
