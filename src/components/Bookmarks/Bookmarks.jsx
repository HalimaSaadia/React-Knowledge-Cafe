import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className='md:w-1/3 ml-5 space-y-5'>
        <h1 className='text-4xl'>Bookmarks added: {bookmarks.length}</h1>
        <h3 className='text-3xl font-bold'>Reading Time: {readingTime} </h3>
        {bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} />)}
    </div>
  )
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number
}
export default Bookmarks