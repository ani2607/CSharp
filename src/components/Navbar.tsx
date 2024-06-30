import { Link } from "react-router-dom";



const Navbar = () => {

    const user : boolean = false;
  return (
    <nav className="flex justify-around gap-x-32 items-center">

        <div className="left flex items-center justify-start  ">
            <div className="tile ml-5 ">
                <img className="mr-20"  width={120} src="/logo.jpeg" alt="logo_img" />
            </div>
            
        </div>
        <div className="right">
            {
                user ? <div className="flex gap-x-8">
                    <h1>Aniket</h1>
                    <button>Logout</button>
                </div> : <div className="bg-blue-500 p-2 w-full rounded">
                    <Link to={'/login'}  >Login </Link>
                </div>
            }
        </div>
      
    </nav>
  )
}

export default Navbar
