import Content from "./Content";
import "./Home.css";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="fullBody">
        <Navbar />
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

        <div className="mt-14  relative inset-x-0 bottom-0 bg-white">
          <div className="flex justify-center max-w-5xl flex-col mx-auto">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
