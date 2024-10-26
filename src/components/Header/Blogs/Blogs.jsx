// import { useEffect, useState } from "react";
// import Blog from "../../Blog/Blog";
// import PropTypes from "prop-types";

// export default function Blogs({ handleAddToBookmark }) {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("blogs.json")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setBlogs(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Fetch error:', error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="w-2/3">
//       <h1 className="text-4xl"> Blogs : {blogs.length}</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         blogs.map(blog => <Blog key={blog.id} blog={blog} 
//           handleAddToBookmark={handleAddToBookmark}
//         ></Blog>)
//       )}
//     </div>
//   );
// }

// Blogs.propTypes = {
//   handleAddToBookmark: PropTypes.
// }
















