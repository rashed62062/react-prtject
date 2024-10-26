import PropTypes from "prop-types"
export default function Bookmark( {bookmark} ) {
    console.log(bookmark);
    const [title] = bookmark;
  return (
    <div>
        <h3 className="text-3xl">{title}</h3>
    </div>
  )
}
Bookmark.prototype = {
    bookmark:PropTypes.object
}
