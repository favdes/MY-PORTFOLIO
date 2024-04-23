
import { Link } from 'react-router-dom';
// import DownloadModal from '../component/DownloadModal.jsx';

const OffCanvasSidebar = ({ showSidebar, toggleSidebar}) => {
  return (
    <div className={`offcanvas offcanvas-end bg-white  w-75 ${showSidebar ? 'show' : ''}`} tabIndex="-1" id="offcanvasExample" style={{opacity:"0.5"}} aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header" >
        <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
        <button type="button" className="btn-close text-reset" onClick={toggleSidebar} aria-label="Close "></button>
      </div>

      <div className="offcanvas-body ">
        <h1 className='text-dark'>Click any to Navigate to your desire page.</h1>
        <ul className="list-unstyled mt-5" >

          <li><Link to="/projects" className='text-decoration-none'><h2 style={{color:"#F16529"}}className='pb-3'>Projects</h2></Link></li> 

          {/* <DownloadModal/> */}

          <li><Link to="/contacts" className='text-decoration-none'><h2 style={{color:"#F16529"}}>Contacts</h2></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default OffCanvasSidebar;
