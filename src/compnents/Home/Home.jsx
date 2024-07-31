import Content from "./CardContainer/CardContainer";
import "./Home.css";
import Navbar from "../NavBar/Navbar";
import SideBar from "./SideBar/SideBar";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="fullBody">
        <div className=" flex justify-center max-w-5xl flex-col mx-auto">
          <div className="grid grid-cols-5 gap-4">
            <div className="">
              <SideBar />
            </div>
            <div className="col-start-2 col-span-4 ">
              <Content />
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}
