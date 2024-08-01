import Logo from "../presentational/Logo";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="mt-14  relative inset-x-0 bottom-0 bg-white">
        <div className="flex justify-center max-w-5xl flex-col mx-auto">
          <div className=" px-4 relative h-47 pb-7 ">
            <footer className=" text-black flex flex-col space-y-4 ">
              <div className=" flex justify-between content-center py-1.5">
                <span>
                  <Logo />
                </span>
                <span className="text-lg font-extralight">
                  Follow Us On:
                  <span className="">
                    <a className="mx-2" href="#">
                      <i class="fa-brands fa-square-facebook"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i class="fa-brands fa-square-instagram"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </span>
                </span>
              </div>

              <div className="bg-slate-100 flex justify-around my-1 py-1">
                <span>
                  <NavLink to="/about"

                   className={({isActive})=>`rounded ${isActive ? "font-semibold bg-slate-300" : "font-normal"} px-2`} 
                   
                   >ABOUT US</NavLink>
                </span>
                <span>
                  <NavLink to="/contact"
                  
                  className={({isActive})=>`rounded ${isActive ? "font-semibold bg-slate-300" : "font-normal"} px-2`} 

                  >CONTACT US</NavLink>
                </span>
                <span>
                  <NavLink>TERMS AND CONDITIONS</NavLink>
                </span>
                <span>
                  <NavLink>ARCHIVES</NavLink>
                </span>
              </div>
              <div className="text-center my-2">Copyright ©</div>
              <div className="text-center font-extralight  my-2">made by - sachinandan</div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
