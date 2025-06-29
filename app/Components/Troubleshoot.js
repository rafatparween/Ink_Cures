"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation'; 

export default function Troubleshoot() {
  const router = useRouter(); 

  const handleSetupClick = () => {
    // router.push('../service/Pages'); // Ensure the path is correct
    // router.push('../');
    //  router.push('/contact');
  };
  return (
    <div className="bg-white h-[430px] flex flex-col items-center justify-center px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl w-full ">
        {/* Left: Devices */}
        {/* <div className="flex justify-center items-center gap-6 lg:w-1/2 mb-10 lg:mb-0">
          <Image
            src="/dignose.avif"
            alt="Printer"
            width={539}
            height={347}
            className="object-contain"
          />
        </div>
        <button 
    className="bg-[#007DBD] text-white py-3 px-8 rounded text-lg font-medium hover:bg-blue-300 transition duration-200"
    onClick={handleSetupClick}
  >
    Printer Setup
  </button> */}
  <div className="flex flex-col items-center gap-6 lg:w-1/2 mb-10 lg:mb-0">
  <Image
    src="/newdig.png"
    alt="Printer"
    width={539}
    height={347}
    className="object-contain"
  />
  <button 
    className="bg-[#007DBD] text-white py-3 px-8 rounded text-lg font-medium hover:bg-blue-300 transition duration-200"
    onClick={handleSetupClick}
  >
     Click Here For Printer Setup
  </button>
</div>

        {/* Right: Text */}
       
        <div className="lg:w-1/2 text-center lg:text-left">
        <p className="text-[40px] font- text-black mb-2 ">Diagnose and solve</p>
  <div className="flex items-start justify-center lg:justify-start mb-4">
    
    
    <h1 className="text-[29px] text-black">
      Contact Support – Chat Live
    </h1>
  </div>

  {/* Paragraph */}
  <p className="text-[20px] text-black leading-relaxed mb-2">
    In this support hub, you’ll find quick access to live assistance for common computer and printer issues.
  </p>
  <p className="text-[20px] text-black leading-relaxed">
    Click the tabs to switch between <span className="font-bold">Computer</span> and <span className="font-bold">Printer</span> topics,
    <br/>
    Then start a live chat with a support agent.
  </p>
</div>

      </div>
    </div>
  )
}


