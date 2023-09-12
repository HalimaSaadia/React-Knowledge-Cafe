import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
  return (
    <div className='bg-gray-300 rounded-xl p-5 my-5'>
        <h1 className='text-2xl font-bold'>{bookmark.title}</h1>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark