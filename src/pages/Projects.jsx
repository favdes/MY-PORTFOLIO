
import "../style/Projects.css";
import img1 from "../assets/my picture.jpg";
import img2 from "../assets/Group 11.png";
import img3 from "../assets/Vector (19).png";
import img4 from "../assets/Vector (20).png";
import { Link } from "react-router-dom";
import img5 from "../assets/Vector (21).png";
// import DownloadModal from "../component/DownloadModal";

const Projects = () => {


  
  return (
    <div className="">
      <div className="d-lg-flex justify-content-between bg-black text-white ">
        <div className="conainer w-100 ">
          <div className="">
            <Link className=" text-white text-decoration-none mt-3" to="/">
              <h4 className="bar p-4">FAVDEVS.</h4>
            </Link>
          </div>

          <section className="container">
            <div className="container  mt-lg-5 pt-5 ">
              <button
                className="full bg-white  "
                style={{ border: "none", fontSize: "1.8rem" }}
              >
                Full Stack Developer
              </button>
              <h5 className="b text-white mt-5" style={{ fontSize: "4rem" }}>
                Favour Echiejile
              </h5>
              <p className=" paragraph mt-3" style={{ fontSize: "1.5rem" }}>
                CAREER OBJECTIVES : To work with existing staff, facilities and
                ensure business objectives are achieved. Secondly, to use my
                skills to contribute immensely to the growth of any
                establishment through hard work,commitment and the drive for
                excellence even as I grow forward and upward in my career.
              </p>{" "}
            </div>
          </section>

          <div className=" container d-flex my-5 ">
            <ul className="container list-unstyled ">
              <Link t0="/projects" className="text-decoration-none text-white">
                <h4>
                  <li>01 ___ Projects</li>
                </h4>
              </Link>
              <div className="dl">
                {/* <li style={{ color: "#B5B5B5" }}>
                  {" "}
                  <h4 className="dlm d-flex">
                    02 ___
                    <DownloadModal />
                  </h4>
                </li> */}
              </div>
              <Link to="/contacts" className="text-decoration-none">
                <li style={{ color: "#B5B5B5" }}>
                  {" "}
                  <h4>02 ___ Contacts</h4>{" "}
                </li>
              </Link>
            </ul>
          </div>
          <div className="d-flex align-items-right ">
            <section className="container  ">
              <div className="d-flex gap-3 mb-3">
                <img
                  className="pic rounded-5 mb-4"
                  style={{ width: "3rem" }}
                  src={img1}
                  alt=""
                />
                <div>
                <Link className="text-decoration-none" to="/Contacts">
                  <div className="Em d-flex gap-2 mt-2  ms-lg-2"
                    style={{ color: "#B5B5B5" }}
                  >
                    <img className="Em h-25 mt-1" src={img2} alt="" />
                    <h5 className="Em">Email Me</h5>
                    <img className=" Em h-25 mt-1 " src={img3} alt="" />
                  </div></Link>
                </div>

                <div className=" me-lg-5 gh2">
                  <Link
                    to="https://github.com/favdes"
                    className=" d-flex text-decoration-none gap-2"
                    style={{ color: "#B5B5B5" }}
                  >
                    <img className="gh2 h-25 mt-2 " src={img4} alt="" />
                    <h5 className="gh2 mt-1">Github</h5>
                    <img className="gh2 h-25 mt-2 " src={img3} alt="" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div
          className="proanimate container d-flex  justify-content-center "
          style={{ backgroundColor: "#2a2929" }}
        >
          <div>
            <div className="d-lg-flex gap-5 d-lg-flex  justify-content-center  mt-5 ">
              <section className="projects w-100">
                <div className=" container ">
                  <h6 className="p1">React & Bootstrap And CSS</h6>
                  <h3 className="p2 ">Shopping Cart</h3>
                  <div className="p3 d-flex ">
                    <Link
                      to="https://github.com/favdes/shopping-cart"
                      className=" text-decoration-none"
                    >
                      <div className="container git  d-flex">
                        <img className="p4 " src={img4} alt="" />
                        <h6 className="p4 ms-1 me-2 d-flex align-items-center  ">
                          Github
                        </h6>
                        <img className="p4 " src={img3} alt="" />
                      </div>
                    </Link>

                    <Link
                      to="https://shopping-cart-gilt-seven.vercel.app/"
                      className=" text-decoration-none"
                    >
                      <div className=" git   d-flex  ">
                        <img className="p4  " src={img5} alt="" />
                        <h6 className="p4 ms-1 me-2 d-flex align-items-center">
                          Website
                        </h6>
                        <img className=" p4 " src={img3} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </section>

              <section className="projects w-100">
                <div className=" container ">
                  <h6 className="p1">React & Node</h6>
                  <h3 className="p2 ">Ecommerce Front Website</h3>
                  <div className="p3 d-flex">
                    <Link
                      to="https://github.com/favdes/ecommercefront"
                      className=" text-decoration-none"
                    >
                      <div className="container git  d-flex">
                        <img className="p4 " src={img4} alt="" />
                        <h6 className="p4 ms-1 me-2 d-flex align-items-center">Github</h6>
                        <img className="p4 " src={img3} alt="" />
                      </div>
                    </Link>

                    <Link
                      to="https://ecommercefront-zeta.vercel.app/"
                      className=" text-decoration-none"
                    >
                      <div className=" git  d-flex  ">
                        <img className="p4  " src={img5} alt="" />
                        <h6 className="p4 ms-1 me-2 d-flex align-items-center">
                          Website
                        </h6>
                        <img className=" p4 " src={img3} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
            <div className="d-lg-flex gap-5 d-lg-flex  justify-content-center mt-5">
              <section className="projects w-100">
                <div className=" container ">
                  <h6 className="p11">Javacript, React & Node</h6>
                  <h3 className="p2 ">TASK Manager Website</h3>
                  <div className="p3 d-flex">
                    <Link
                      to="https://github.com/favdes/My-Frontend-Project"
                      className=" text-decoration-none"
                    >
                      <div className="container git  d-flex">
                        <img className="p4 " src={img4} alt="" />
                        <h6 className="p4 ms-1 me-2 d-flex align-items-center">Github</h6>
                        <img className="p4 " src={img3} alt="" />
                      </div>
                    </Link>

                    <Link
                      to="https://my-frontend-project-gamma.vercel.app/"
                      className=" text-decoration-none"
                    >
                      <div className=" git   d-flex  ">
                        <img className="p4  " src={img5} alt="" />
                        <h6 className="p4 ms-1 me-2 d-flex align-items-center">
                          Website
                        </h6>
                        <img className=" p4 " src={img3} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </section>

              <section className="projects w-100">
                <div className=" container ">
                  <h6 className="p11">Javacript</h6>
                  <h3 className="p2 ">NEWSLETTER SignUP</h3>
                  <div className="p3 d-flex">
                    <Link
                      to="https://github.com/favdes/newslettersignup"
                      className=" text-decoration-none"
                    >
                      <div className="container git   d-flex">
                        <img className="p4" src={img4} alt="" />
                        <h6 className="p4 ms-1 me-2 d-flex align-items-center">Github</h6>
                        <img className="p4 " src={img3} alt="" />
                      </div>
                    </Link>

                    <Link
                      to="https://newslettersignup-nu.vercel.app/"
                      className=" text-decoration-none"
                    >
                      <div className=" git   d-flex  ">
                        <img className="p4  " src={img5} alt="" />
                        <h6 className="p4 ms-1 me-2 d-flex align-items-center">
                          Website
                        </h6>
                        <img className=" p4 " src={img3} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            <div className="d-lg-flex gap-5 mt-5 d-lg-flex  justify-content-center">
              <section className="projects w-100">
                <div className=" container ">
                  <h6 className="p1">BOOTSTRAP & CSS</h6>
                  <h3 className="p2 ">RemoteWork Website</h3>
                  <div className="p3 d-flex">
                    <Link
                      to="https://github.com/favdes/Remotework"
                      className=" text-decoration-none"
                    >
                      <div className="container git  d-flex">
                        <img className="p4 " src={img4} alt="" />
                        <h6 className="p4 ms-1 me-2 d-flex align-items-center">Github</h6>
                        <img className="p4 " src={img3} alt="" />
                      </div>
                    </Link>

                    <Link
                      to="https://remotework-five.vercel.app/"
                      className=" text-decoration-none"
                    >
                      <div className=" git   d-flex  ">
                        <img className="p4  " src={img5} alt="" />
                        <h6 className="p4 ms-1 me-2 d-flex align-items-center">
                          Website
                        </h6>
                        <img className=" p4 " src={img3} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </section>

              <section className="projects w-100">
                <div className=" container ">
                  <h6 className="p11">Html $ CSS</h6>
                  <h3 className="p2 ">Home Page</h3>
                  <div className="p3 d-flex">
                    <Link
                      to="https://github.com/favdes/NEWHOMEPAGE"
                      className=" text-decoration-none"
                    >
                      <div className="container git   d-flex">
                        <img className="p4 p8" src={img4} alt="" />
                        <h6 className="p4 ms-1 me-2 d-flex align-items-center p8">Github</h6>
                        <img className="p4 p8" src={img3} alt="" />
                      </div>
                    </Link>

                    <Link
                      to="https://newhomepage-two.vercel.app/"
                      className=" text-decoration-none"
                    >
                      <div className=" git   d-flex  ">
                        <img className="p4  p8" src={img5} alt="" />
                        <h6 className="p4 ms-1 me-2 d-flex align-items-center p8">
                          Website
                        </h6>
                        <img className=" p4 p8" src={img3} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            <div className="projec d-lg-flex gap-5 mt-5 d-lg-flex  justify-content-center">
              <section className="projects w-100">
                <div className=" container ">
                  <h6 className="p1">React & Node</h6>
                  <h3 className="p2 ">Personal-Tasks Website</h3>
                  <div className="p3 d-flex">
                    <Link
                      to="https://github.com/favdes/personalTask-Frontend"
                      className=" text-decoration-none"
                    >
                      <div className="container  d-flex">
                        <img className="p4 " src={img4} alt="" />
                        <h6 className="p4 ms-1 me-2 d-flex align-items-center">Github</h6>
                        <img className="p4 " src={img3} alt="" />
                      </div>
                    </Link>

                    <Link
                      to="https://personal-task-frontend.vercel.app/"
                      className=" text-decoration-none"
                    >
                      <div className=" git   d-flex  ">
                        <img className="p4  " src={img5} alt="" />
                        <h6 className="p4 ms-1 me-2 d-flex align-items-center">
                          Website
                        </h6>
                        <img className=" p4 " src={img3} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </section>

              <section className="projects w-100 ">
                <div className=" container ">
                  <h6 className="p1">React, Node, Bootstrap & CSS</h6>
                  <h3 className="p2 ">POSTIT - Website</h3>
                  <div className="p3 d-flex">
                    <Link
                      to="https://github.com/favdes/MyPost"
                      className=" text-decoration-none"
                    >
                      <div className="container git  d-flex">
                        <img className="p4 p5" src={img4} alt="" />
                        <h6 className="p4 ms-1 me-2 p5 d-flex align-items-center">
                          Github
                        </h6>
                        <img className="p4 p5" src={img3} alt="" />
                      </div>
                    </Link>

                    <Link
                      to="https://my-post-eight.vercel.app/"
                      className=" text-decoration-none"
                    >
                      <div className=" git   d-flex  ">
                        <img className="p4  p5" src={img5} alt="" />
                        <h6 className="p4 ms-1 me-2 p5 d-flex align-items-center">
                          Website
                        </h6>
                        <img className=" p4 p5" src={img3} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            <div className="d-lg-flex gap-5 mt-5  justify-content-center">
              <section className="projects w-100">
                <div className=" container ">
                  <h6 className="p11">React & Node</h6>
                  <h3 className="p2 ">Restfull API Website</h3>
                  <div className="p3 d-flex">
                    <Link
                      to="https://github.com/favdes/RestFull-API-Goal-ON-Frontend-"
                      className=" text-decoration-none"
                    >
                      <div className="container git   d-flex">
                        <img className="p4 p9" src={img4} alt="" />
                        <h6 className="p4 ms-1 me-2  d-flex align-items-center p9">
                          Github
                        </h6>
                        <img className="p4 p9" src={img3} alt="" />
                      </div>
                    </Link>

                    <Link
                      to="https://rest-full-api-goal-on-frontend.vercel.app/"
                      className=" text-decoration-none"
                    >
                      <div className=" git   d-flex  ">
                        <img className="p4  p9" src={img5} alt="" />
                        <h6 className="p4 ms-1 me-2 d-flex align-items-center p9">
                          Website
                        </h6>
                        <img className=" p4 p9" src={img3} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </section>

              <section className="projects w-100 mb-5 ">
                <div className=" container">
                  <h6 className="p11">React, Node,Bootstrap & CSS</h6>
                  <h3 className="p2 ">GitUser Search Website</h3>
                  <div className="p8 gap-4 d-flex text-decoration-none">
                    <Link
                      className="l6-ll text-decoration-none"
                      to="https://github.com/favdes/GitUserSearch "
                    >
                      <div className="container   d-flex ">
                        <img className="p4 ege p7" src={img4} alt="" />
                        <h6 className="p4 ms-1 me-2 d-flex align-items-center p7">
                          Github
                        </h6>
                        <img className="p4 ege p7" src={img3} alt="" />
                      </div>
                    </Link>

                    <Link
                      className="l6-ll text-decoration-none"
                      to="https://git-user-search-ashen.vercel.app/"
                    >
                      <div className=" git  d-flex  p6 ">
                        <img className="p4 ms-1  p7" src={img5} alt="" />
                        <h6 className="p4  ms-1 me-2 h6-txt d-flex align-items-center text-decoration-none p7 ">
                          Website
                        </h6>
                        <img className="p4 p7" src={img3} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;








// import "../style/Projects.css";
// import img1 from "../assets/my picture.jpg";
// import img2 from "../assets/Group 11.png";
// import img3 from "../assets/Vector (19).png";
// import img4 from "../assets/Vector (20).png";
// import { Link } from "react-router-dom";
// import img5 from "../assets/Vector (21).png";
// import DownloadModal from "../component/DownloadModal";

// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       stack: "React & Bootstrap And CSS",
//       title: "Shopping Cart",
//       githubLink: "https://github.com/favdes/shopping-cart",
//       websiteLink: "https://shopping-cart-gilt-seven.vercel.app/",
//       image: img4,
//     },
//     {
//       id: 2,
//       stack: "React & Node",
//       title: "Ecommerce Front Website",
//       githubLink: "https://github.com/favdes/ecommercefront",
//       websiteLink: "https://ecommercefront-zeta.vercel.app/",
//       image: img5,
      
//     },
//     {
//       id: 3,
//       stack: "Javacript, React & Node",
//       title: "TASK Manager Website",
//       githubLink: "https://github.com/favdes/My-Frontend-Project",
//       websiteLink: "https://my-frontend-project-gamma.vercel.app/",
//       image: img4,
//     },
//     {
//       id: 4,
//       stack: "Javacript",
//       title: "NEWSLETTER SignUP",
//       githubLink: "https://github.com/favdes/newslettersignup",
//       websiteLink: "https://newslettersignup-nu.vercel.app/",
//       image: img5,
//     },
//     {
//       id: 5,
//       stack: "BOOTSTRAP & CSS",
//       title: "RemoteWork Website",
//       githubLink: "https://github.com/favdes/Remotework",
//       websiteLink: "https://remotework-five.vercel.app/",
//       image: img4,
//     },
//     {
//       id: 6,
//       stack: "Html $ CSS",
//       title: "Home Page",
//       githubLink: "https://github.com/favdes/NEWHOMEPAGE",
//       websiteLink: "https://newhomepage-two.vercel.app/",
//       image: img5,
//     },
//     {
//       id: 7,
//       stack: "React & Node",
//       title: "Personal-Tasks Website",
//       githubLink: "https://github.com/favdes/personalTask-Frontend",
//       websiteLink: "https://personal-task-frontend.vercel.app/",
//       image: img4,
//     },
//     {
//       id: 8,
//       stack: "React, Node, Bootstrap & CSS",
//       title: "POSTIT - Website",
//       githubLink: "https://github.com/favdes/MyPost",
//       websiteLink: "https://my-post-eight.vercel.app/",
//       image: img5,
//     },
//     {
//       id: 9,
//       stack: "React & Node",
//       title: "Restfull API Website",
//       githubLink: "https://github.com/favdes/RestFull-API-Goal-ON-Frontend-",
//       websiteLink: "https://rest-full-api-goal-on-frontend.vercel.app/",
//       image: img4,
//     },
//     {
//       id: 10,
//       stack: "React, Bootstrap & CSS",
//       title: "GitUser Search Website",
//       githubLink: "https://github.com/favdes/GitUserSearch",
//       websiteLink: "https://git-user-search-ashen.vercel.app/",
//       image: img5,
//     },
//     Add more project objects as needed
//   ];

//   return (
//     <div className="">
//       <div className="d-lg-flex justify-content-between bg-black text-white ">
//         <div className="conainer w-100">
//           <div className="">
//             <Link className=" text-white text-decoration-none mt-3" to="/">
//               <h4 className="bar p-4">FAVDEVS.</h4>
//             </Link>
//           </div>

//           <section className="container">
//             <div className="container  mt-lg-5 pt-5 ">
//               <button
//                 className="full bg-white  "
//                 style={{ border: "none", fontSize: "1.8rem" }}
//               >
//                 Full Stack Developer
//               </button>
//               <h5 className="b text-white mt-5" style={{ fontSize: "4rem" }}>
//                 Favour Echiejile
//               </h5>
//               <p className=" paragraph mt-3" style={{ fontSize: "1.5rem" }}>
//                 CAREER OBJECTIVES : To work with existing staff, facilities and
//                 ensure business objectives are achieved. Secondly, to use my
//                 skills to contribute immensely to the growth of any
//                 establishment through hard work,commitment and the drive for
//                 excellence even as I grow forward and upward in my career.
//               </p>{" "}
//             </div>
//           </section>

//           <div className=" container d-flex my-5 ">
//             <ul className="container list-unstyled ">
//               <Link t0="/projects" className="text-decoration-none text-white">
//                 <h3>
//                   <li>01 ___ Projects</li>
//                 </h3>
//               </Link>
//               <div className="dl">
//                 <li style={{ color: "#B5B5B5" }}>
//                   {" "}
//                   <h3 className="dlm d-flex">
//                     02 ___
//                     <DownloadModal />
//                   </h3>
//                 </li>
//               </div>
//               <Link to="/contacts" className="text-decoration-none">
//                 <li style={{ color: "#B5B5B5" }}>
//                   {" "}
//                   <h3>03 ___ Contacts</h3>{" "}
//                 </li>
//               </Link>
//             </ul>
//           </div>
//           <div className="d-flex align-items-right ">
//             <section className="container  ">
//               <div className="d-flex gap-3 mb-3">
//                 <img
//                   className="pic rounded-5 mb-4"
//                   style={{ width: "3rem" }}
//                   src={img1}
//                   alt=""
//                 />
//                 <div>
//                   <div
//                     className="Em d-flex gap-2 mt-2  ms-lg-2"
//                     style={{ color: "#B5B5B5" }}
//                   >
//                     <img className="Em h-25 mt-1" src={img2} alt="" />
//                     <h5 className="Em">Email Me</h5>
//                     <img className=" Em h-25 mt-1 " src={img3} alt="" />
//                   </div>
//                 </div>

//                 <div className="me-lg-5 gh2">
//                   <Link
//                     to="https://github.com/favdes"
//                     className="d-flex text-decoration-none gap-2"
//                     style={{ color: "#B5B5B5" }}
//                   >
//                     <img className="gh2 h-25 mt-2 gh1" src={img4} alt="" />
//                     <h5 className=" mt-1">Github</h5>
//                     <img className=" h-25 mt-2 " src={img3} alt="" />
//                   </Link>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>

        
//         <div
//           className="proanimate container justify-content-center "
//           style={{ backgroundColor: "#2a2929" }}
//         >
//           <div className="">
//           {projects.map((project) => (
//             <section key={project.id} className="projects w-100">
//               <div className="container ">
//                 <h6 className=" p1">{project.stack}</h6>
//                 <h3 className="p2">{project.title}</h3>
//                 <div className="p3 d-flex">
//                   <Link
//                     to={project.githubLink}
//                     className="contact text-decoration-none"
//                   >
//                     <div className="container git contact d-flex">
//                       <img className="p4" src={project.image} alt="" />
//                       <h6 className="p4 d-flex align-items-center">Github</h6>
//                       <img className="p4" src={img3} alt="" />
//                     </div>
//                   </Link>
//                   <Link
//                     to={project.websiteLink}
//                     className="contact text-decoration-none"
//                   >
//                     <div className="git contact d-flex">
//                       <img className="p4" src={img5} alt="" />
//                       <h6 className="p4 d-flex align-items-center">Website</h6>
//                       <img className="p4" src={img3} alt="" />
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </section>
//           ))}
//           </div>
//           <div className="d-flex">
//           {projects.map((project) => (
//             <section key={project.id} className="projects w-100 ">
//               <div className="container ">
//                 <h6 className="p1">{project.stack}</h6>
//                 <h3 className="p2">{project.title}</h3>
//                 <div className="p3 d-flex">
//                   <Link
//                     to={project.githubLink}
//                     className="contact text-decoration-none"
//                   >
//                     <div className="container git contact d-flex">
//                       <img className="p4" src={project.image} alt="" />
//                       <h6 className="p4 d-flex align-items-center">Github</h6>
//                       <img className="p4" src={img3} alt="" />
//                     </div>
//                   </Link>
//                   <Link
//                     to={project.websiteLink}
//                     className="contact text-decoration-none"
//                   >
//                     <div className="git contact d-flex">
//                       <img className="p4" src={img5} alt="" />
//                       <h6 className="p4 d-flex align-items-center">Website</h6>
//                       <img className="p4" src={img3} alt="" />
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </section>
//           ))}
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
