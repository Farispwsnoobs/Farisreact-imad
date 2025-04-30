import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError(""); 
    
    if (!email) {
      setError("Please enter your email address");
      setIsSubscribed(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      setIsSubscribed(false);
      return;
    }

    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <div className="flex justify-center w-full bg-white">
      
      <div className="flex flex-col items-start px-[100px] py-0 gap-[10px] w-[1441px] h-[514px]">
        
        <div className="flex flex-col items-start p-[55px_60px_50px] gap-[50px] w-[1241px] h-[514px] bg-[#191A23] rounded-t-[45px]">
          
          <div className="flex flex-row items-start p-0 gap-[154px] w-[1120px] h-[185px]">
            
            <div className="flex flex-col items-start p-0 gap-[27px] w-[332px] h-[185px]">
              
              <div className="flex flex-col items-start p-0 w-[126px] h-[26px]">
                <div className="flex flex-col items-start p-[0_7px] gap-[10px] w-[126px] h-[26px] bg-[#B9FF66] rounded-[7px]">
                  <div className="w-[112px] h-[26px] font-['Space_Grotesk'] font-medium text-[20px] leading-[26px] text-black">Contact us</div>
                </div>
              </div>

             
              <div className="flex flex-col items-start p-0 gap-[20px] w-[332px] h-[132px]">
                <p className="w-[228px] h-[23px] font-['Space_Grotesk'] font-normal text-[18px] leading-[23px] text-white">Email: info@positiveus.com</p>
                <p className="w-[185px] h-[23px] font-['Space_Grotesk'] font-normal text-[18px] leading-[23px] text-white">Phone: 555-587-8801</p>
                <p className="w-[332px] h-[46px] font-['Space_Grotesk'] font-normal text-[18px] leading-[23px] text-white">Address: 1234 Main St Moonstone City, Shankat State 12345</p>
              </div>
            </div>

            
            <div className="flex flex-col items-start gap-2">
              <form onSubmit={handleSubscribe} className="flex flex-row items-start p-[58px_40px] gap-[20px] w-[634px] h-[184px] bg-[#292A32] rounded-[14px]">
                
                <div className={`box-border flex flex-row items-start p-[22px_35px] gap-[10px] w-[285px] h-[67px] border rounded-[14px] ${
                  error ? "border-[#FF6B6B]" : "border-white"
                }`}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full bg-transparent border-none outline-none font-['Space_Grotesk'] font-normal text-[18px] leading-[23px] text-white placeholder:text-gray-400"
                  />
                </div>

                
                <button
                  type="submit"
                  className="flex flex-row items-start p-[20px_35px] gap-[10px] w-[249px] h-[68px] bg-[#B9FF66] rounded-[14px] cursor-pointer hover:bg-[#a5e55a] transition-colors"
                >
                  <div className="w-[179px] h-[28px] font-['Space_Grotesk'] font-normal text-[20px] leading-[28px] text-center text-black">
                    Subscribe to news
                  </div>
                </button>
              </form>

              
              <div className="ml-[58px] min-h-[20px]">
                {error && (
                  <p className="text-[#FF6B6B] font-['Space_Grotesk'] text-[16px]">
                    {error}
                  </p>
                )}
                {isSubscribed && (
                  <p className="text-[#B9FF66] font-['Space_Grotesk'] text-[16px]">
                    Thank you for subscribing!
                  </p>
                )}
              </div>
            </div>
          </div>

          
          <div className="flex flex-col items-start p-0 gap-[50px] w-[1120px] h-[78px]">
            
            <div className="w-[1120px] h-0 border border-white"></div>

            
            <div className="flex flex-row items-start p-0 gap-[40px] w-[485px] h-[28px]">
              <p className="w-[324px] h-[28px] font-['Space_Grotesk'] font-normal text-[18px] leading-[28px] text-white">© 2023 Positives. All Rights Reserved.</p>
              <a href="EthicalPolicy" className="w-[121px] h-[28px] font-['Space_Grotesk'] font-normal text-[18px] leading-[28px] underline text-white hover:text-[#B9FF66] transition-colors">Ethical Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;