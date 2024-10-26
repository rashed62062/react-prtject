import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { CiBookmarkRemove } from "react-icons/ci";

export default function Blog({ blog, handleAddToBookmark }) {
  // Destructure the title from the blog object
  const { title, cover, author,reading_time,author_img,posted_date,hashtags} = blog;

  return (
    <div className='mb-20'>
        
        <img className='rounded-md shadow-md w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
        <div className='flex justify-between mb-5'>
            <div className='flex ' >
                <img className='w-14 rounded-[50%]' src={author_img} alt="" />
                <div className='ml-4 mt-3'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
            
            </div>
            <div>
                <span>{reading_time} min read</span>
                <button  onClick={ () =>handleAddToBookmark(blog)}
                
                className='text-2xl text-red-400'><CiBookmarkRemove></CiBookmarkRemove></button>

            </div>
        </div>
        
      <h2 className='text-4xl'>{title}</h2>
      <p className='text-red-200 text-2xl'>
          {
            hashtags.map((has, idx)  =>  <span key={idx}> <a href="">{hashtags}</a></span>)
          }
      </p>
    </div>
  );
}

// Define the PropTypes for the Blog component
Blog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    handleAddToBookmark:PropTypes.func // Ensure title is a required string
    // Add other properties of the blog object if necessary
  }).isRequired,
};
