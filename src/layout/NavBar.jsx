import {useState} from 'react'
import {Link, Outlet} from "react-router-dom"
// import DownloadModal from '../component/DownloadModal'
import OffCanvasSidebar from '../component/OffCanvas'
import "../style/NavBar.css"
import img1 from "../assets/icons8-menu-24.png"



const NavBar = ()  => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  
  return (
    <div className=' bg-dark  pt-2 '> 
    <div className='container d-flex  justify-content-around '>
  <div className='container d-flex justify-content-around nav'>
    <Link to="/" className='container text-decoration-none text-white '><h4 >FAVDEVS.</h4></Link>
    </div>
 <div className='container d-flex justify-content-around mt-4'>
     <Link to="/Projects"  className="project text-decoration-none text-white  ">Projects</Link>
     {/* <div className='lg'>< DownloadModal/></div> */}
     <Link to="/Contacts"  className="project text-decoration-none text-white">Contact</Link>
     </div>
       
     <div className='off'>
      <img src={img1} alt=""className="bg-white d-lg-none mb-4 me-2 " onClick={toggleSidebar} />
      <OffCanvasSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </div>
    </div>
    <Outlet/>
    </div>
  )
}

export default NavBar