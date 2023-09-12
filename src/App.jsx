import { useState } from 'react'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)


  const handleAddBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleReadingTime = time => {
    setReadingTime(readingTime + time)
    console.log(readingTime)
  }
  return (
    <>
      <Header />
      <div className='md:flex p-5 max-w-7xl mx-auto'>
          <Blogs handleAddBookmarks={handleAddBookmarks} handleReadingTime={handleReadingTime} />
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}/>
      </div>
    
    </>
  )
}

export default App
