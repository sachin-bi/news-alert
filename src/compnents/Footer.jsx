import Logo from "./presentational/Logo";

export default function Footer() {
  return (
    <>
      <div className=" relative h-32 ">
        <footer className="text-black">
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
          
          <div>
            <div className="bg-slate-100 flex justify-around my-1 py-1">
              <a href="x">ABOUT US</a>
              <a href="x">CONTACT US</a>
              <a href="x">TERMS AND CONDITIONS</a>
              <a href="x">ARCHIVES</a>
            </div>
            <div className="text-center my-2">Copyright ©</div>
          </div>
        </footer>
      </div>
    </>
  );
}
