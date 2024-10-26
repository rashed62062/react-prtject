
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

function Bookmarks({bookmarks}) {
  console.log("🚀 ~ Bookmarks ~ bookmarks:", bookmarks)
  return (
    <div className="md:w-1/3">
        
    <h3 className="text-2xl ml-3">Bookmarked  blogs  :{bookmarks.length}</h3>
    {
      bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark> )
    }

</div>
  )
}

Bookmarks.propTypes = {
  bookmarks:PropTypes.array
}

export default Bookmarks
