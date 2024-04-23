import  { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import img1 from "../assets/Vector (25).png"
import img3 from "../assets/Vector (26).png"
import {Link} from 'react-router-dom'

const DownloadModal = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        
      <ul className=' list-unstyled text-white ' onClick={handleShow}>
        <li className='db' style={{cursor:"pointer", color:"#B5B5B5"}}>Download Resume</li>
      </ul>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <div className=' text-white text-center'style={{backgroundColor:"#212529"}}>
     <section className='' >
     <div className='d-flex justify-content-end' onClick={()=>handleClose(true)}>
     <img src={img3} alt="" />
     </div>

      <img src={img1} alt=""  />
      <Link style={{color:"#F16529"}}><p className='mt-3'> Favour Resume.pdf</p></Link>
      <h1 style={{fontFamily:"Hammersmith One"}}>Download In Progress!</h1>
      <p className='down' style={{fontFamily:"lato",color:"#B5B5B5", fontSize:"17px"}}>Kindly check your downloads for the downloaded file.</p>
      <div>
        <div onClick={()=>handleClose(true)}>
        <button className='p-2 border-border-none rounded-2 mb-5' style={{color:"#292727", background:"#D9D9D9", }}>Go to Downloads</button>
        </div>
      </div>
     </section>
      </div>
  
      </Modal>
    </div>
  )
}

export default DownloadModal