import profile from '../../assets/profile.png'
export default function Header() {
  return (
    <header className='flex justify-between items-center border-b-2 p-5   max-w-7xl mx-auto'>
         <h1 className="text-4xl font-bold"> Knowledge Cafe</h1>
          <img src={profile} alt=''/>
        </header>
  )
}
