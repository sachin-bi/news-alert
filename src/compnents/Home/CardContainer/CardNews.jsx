import './CardNews.css';

//rafce
const CardNews = () => {
  return (
    <>
      <div className=" box-content rounded p-3 customShadow mx-6  mb-10">
        <div className="my-1 text-sm font-medium text-red-800">
          PARIS OLYMPICS 2024
        </div>
        <div className="grid grid-cols-5 gap-2">
          <div className="  col-span-4 font-medium">
            <div className="my-2 line-clamp-3 font-semibold">
              <a href="#">
                Olympics 2024 Day 2 Live Updates: Harmeet wins Gold in table
                tennis, shuttler Prannoy loses
              </a>
            </div>
            {/* <hr /> */}
            <div className="my-2 line-clamp-2 text-sm font-normal text-gray-600">
              Paris Olympic Day 2 Live Updates: India's ace shuttler HS Pronoy
              beat Fabian Roth in his group-stage opener, which only adds
              another feather of success to India's performances on Day 2 of the
              Paris Olympics 2024. Earlier, the India
            </div>
          </div>
          <div className=" flex justify-center">
            <span className="border w-28 h-28"> 2.2 photo</span>{" "}
          </div>
        </div>
        <div className= " my-2 grid grid-cols-4 gap-0 md:gap-14 ">
          <button className="border mx-2">a</button>
          <button className="border mx-2">b</button>
          <button className="border mx-2">c</button>
        </div>
      </div>
    </>
  );
};

export default CardNews;
