import { useEffect, useState } from 'react'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import { addToLS, getBookmarksFromLS } from '../public/bookmarksLS'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)


  const handleAddBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
    addToLS(blog.id)
  }

  const handleReadingTime = (time, id) => {
    setReadingTime(readingTime + time)
    const readBookmark = bookmarks.filter(readBookmark => readBookmark.id !== id)
    setBookmarks(readBookmark)
  }
 
  const loadBookmarksFromLS = bookmarksLS => {
    setBookmarks(bookmarksLS)
  }


  return (
    <>
      <Header />
      <div className='md:flex p-5 max-w-6xl mx-auto'>
          <Blogs handleAddBookmarks={handleAddBookmarks} handleReadingTime={handleReadingTime} loadBookmarksFromLS={loadBookmarksFromLS} />
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}/>
      </div>
    
    </>
  )
}

export default App
