import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <div className=' flex justify-between max-w-6xl mx-auto p-5 border-b-2 mb-10'>
        <h1 className="text-4xl font-bold">knowledge cafe</h1>
        <img src={profile} alt="" />
    </div>
  )
}

export default Header