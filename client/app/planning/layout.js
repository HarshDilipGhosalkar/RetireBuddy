import "@/styles/globals.css";




const Layout = ({ children }) => (

  <div >
    <div className="bg-[#DAD0F5] w-[100%] h-[130px] flex flex-row justify-evenly items-center">
      <div className="flex flex-row items-end relative w-[300px]">
        <img className="h-[90px] m-2" src={`/assets/images/image1.png`} />
        <img className="m-2  absolute bottom-[-35px] left-[60px]"  src={`/assets/images/image2.png`}  />
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <div className="text-[#6A4FF7] text-[34px] font-medium">Let’s analyse your expenses</div>
        <div className="text-[#6A4FF7] text-[16px]">enter the current diseases/symptoms you are having</div>

      </div>

      <div className="flex flex-row items-end relative w-[300px]">
        <img className="h-[100px] m-2" src={`/assets/images/image3.png`} />
        <img className="m-2 absolute bottom-[-10px] left-[60px]"  src={`/assets/images/image4.png`}  />
      </div>
    </div>
    <main className="flex flex-col flex-grow relative">{children}</main>
  </div>

);

export default Layout;
