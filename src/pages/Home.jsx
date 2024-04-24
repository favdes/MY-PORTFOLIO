import img1 from "../assets/Vector (17).png";
import { Link } from "react-router-dom";
import img3 from "../assets/Group 6 (3).png";
import img4 from "../assets/logos_javascript.png";
import img5 from "../assets/Vector (18).png";
import img6 from "../assets/Group 5 (2).png";
import img7 from "../assets/my picture.jpg";
import img8 from "../assets/Group 11.png";
import img9 from "../assets/Vector (19).png";
import img10 from "../assets/Vector (20).png";
import img11 from "../assets/Group 2.png";
import "../style/Home.css";

const Home = () => {
  return (
    <>
      <div className=" bg-black">
        <main className="container ">
          <div className="hero d-lg-flex align-items-center justify-content-between ">
            <div className="">
              <button
                className="a1 bg-white  tit"
                style={{ border: "none", fontSize: "1.8rem" }}
              >
                Full Stack Developer
              </button>
              <h5 className="b text-white  "style={{ fontSize: "4rem" }} >
                Favour Echiejile
              </h5>

              <div><p className="container mt-3 p para1" style={{ fontSize: "1.2rem", color: "#B5B5B5" }}>
                CAREER OBJECTIVES : To work with existing staff, facilities and
                ensure business objectives are achieved. Secondly, to use my
                skills to contribute immensely to the growth of any
                establishment through hard work, commitment and the drive for
                excellence even as I grow forward and upward in my career.{" "}
              </p></div>
              <div className=" d-flex gap-1 gap-lg-5 p-2 mt-3 w-75">
                  <div className=""><h4 className="text-white"> BootStrap 
                  <img src={img1} alt="" className="img1 mt-3" />
                  </h4></div>
                <h4 className="text-white"> Html 
                <img src={img3} alt="" className="img2 mt-2 w-75" />
                </h4>
                <div className=""><h4 className="text-white">
                  JavaScript <img src={img4} alt="" className="img3 mt-3" />
                </h4></div>
                <h4 className="text-white">
                  React
                  <img src={img5} alt="" className="img4 mt-3" />
                </h4>
                <div className=""><h4 className="text-white">
                  CSS <img src={img6} alt="" className="img5 mt-2 w-100" />
                </h4></div>
              </div>

            </div>


            <div className=" ">
              <img src={img11} alt="" className="image img-fluid mt-lg-5 pt-lg-5" />
            </div>
          </div>

          <div className="contact d-flex align-items-center gap-4 pb-5  ">
            <img
              className="pict rounded-5 mb-4"
              style={{ width: "3rem" }}
              src={img7}
              alt=""
            />

             <Link className="text-decoration-none" to="/Contacts"><div className="EG  d-flex align-items-center gap-lg-2 ">
              <img className="pic1 EMA" src={img8} alt="" />
              <h3 className="EM  mt-lg-2 pic1 ">Email Me</h3>
              <img className="pic1 mb-1 EMA" src={img9} alt="" />
            </div></Link>

            <div className="gap-2  d-flex align-items-center gap-2 mb-lg-3 egg">
              <Link to="https://github.com/favdes" className="EG text-decoration-none d-flex gap-lg-2 ">
                <img className=" EG h-50 mt-4  pic2" src={img10} alt="" />
              <h3 className=" mt-3 hub">Github</h3></Link>
              <img className="pic3 mb-lg-4" src={img9} alt="" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
