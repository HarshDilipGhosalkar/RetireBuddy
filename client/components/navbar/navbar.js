import Navlinks from "./navlinks";

const Navbar = () => {
  return (
    <div className="min-w-[290px] w-[290px] border-r-[1.9px] border-[#D9D9D9] bg-[white] h-[100vh] flex flex-col px-[21px] py-[20px] box-border font-Inter">
      <div className="flex flex-col gap-y-[0px] justify-center box-border mb-[10px]">
        <div className="flex flex-row gap-x-[5px] px-[30px] text-[26px] items-center font-medium font-Lexend mb-3">
          <img
            className="h-[22px]"
            src="/assets/images/verify.svg"
            alt="logo"
          />
          <p>RetireWise.AI</p>
        </div>
        <div className="flex flex-row gap-x-[5px] px-[60px] text-[#57534E] mt-[-10px] text-[10px] justify-end">
          <div className="text-[13px]">built for</div>
          <img
            className="h-[22px]"
            src="/assets/images/Tiaa_logo.png"
            alt="logo"
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-[12px] text-[14px] mt-[40px]">
        <Navlinks link="dashboard" logo="dashboard.png" text="Dashboard" />
        <Navlinks link="predict" logo="predict.png" text="Predict Retirement Corpus" />
        <Navlinks
          link="planning"
          logo="planning.png"
          text="Retirement Planning"
        />
        <Navlinks
          link="advisor"
          logo="advisor.png"
          text="Financial Advisor"
        />
        
      </div>

      {/* <div className="w-full h-[1px] bg-gray my-[20px]"></div> */}
      <div className="mt-auto mb-10 flex flex-row justify-between   border-[1px] border-[#D9D9D9] rounded-[6px]">
      <div
      className={`flex flex-row gap-x-[20px] font-medium px-[16px] py-[8px] box-border items-center bg-purple-light fade-bg
        cursor-pointer`}
      
    >
      <img className="h-[35px]" src={`/assets/images/profile.png`} alt="navicon" />
      <div>
        <div className="text-[14px]">Rupesh Raut</div>
        <div className="text-[#57534E] text-[13px]">Male, 35 years</div>
        </div>
    </div>
        {/* <Navlinks link="Logout" logo="logout.svg" text="" /> */}
      </div>
    </div>
  );
};

export default Navbar;
