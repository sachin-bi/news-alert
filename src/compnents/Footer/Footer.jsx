import Logo from "../presentational/Logo";



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
              <a href="x">ABOUT US</a>
              <a href="x">CONTACT US</a>
              <a href="x">TERMS AND CONDITIONS</a>
              <a href="x">ARCHIVES</a>
            </div>
            <div className="text-center my-2">Copyright ©</div>
        </footer>
      </div>

      </div>
      </div>
    </>
  );
}
