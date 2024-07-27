import Logo from "./presentational/Logo";


export default function Navbar() {
  return (
    <>
      <div >
        <nav className="py-2.5 flex justify-around items-center drop-shadow-xl bg-white mb-5 ">
          <Logo/>
          <span className="flex items-center rounded-none gap-x-2 ">
            <div className="rounded-xl border-2 border-sky-200 ">
              <form>
                <input
                  className=" outline-none rounded-xl px-2 py-1 "
                  placeholder="Search"
                  name="searchBox"
                  type="text"
                />
                <button className="outline-none px-2 py-1 hover:text-blue-500 ">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>

            <div>
              <button className="border rounded-lg bg-green-600 text-white px-2 py-1">
                Sign In
              </button>
            </div>
          </span>
        </nav>
      </div>
    </>
  );
}
