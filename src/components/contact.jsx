import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('L\'email doit être valide.'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères.'),
  type: z.enum(['hi', 'quote']),
});

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      type: 'hi',
    }
  });

  const onSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const formData = watch();

  const handleTypeChange = (value) => {
    setValue('type', value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white px-4 sm:px-6 md:px-12">
      <div className="flex-grow flex justify-center items-center py-12">
        <div className="relative w-full max-w-[1240px] bg-[#F3F3F3] rounded-[32px] md:rounded-[45px] px-6 sm:px-10 md:px-[100px] pt-10 md:pt-[60px] pb-16 md:pb-[80px] overflow-hidden">
          <div className="flex flex-col items-start gap-10 sm:gap-[40px] w-full max-w-[556px] z-10">
            <div className="flex flex-row gap-6 sm:gap-[35px] w-full max-w-[276px] h-[28px] relative">
              <div className="relative w-[96px] h-[28px] cursor-pointer" onClick={() => handleTypeChange('hi')}>
                <div className="absolute w-[28px] h-[28px] rounded-full border border-black bg-white"></div>
                {formData.type === 'hi' && (
                  <div className="absolute left-[6px] top-[6px] w-[16px] h-[16px] rounded-full bg-[#B9FF66]"></div>
                )}
                <p className="absolute left-[42px] top-[2px] text-[18px] leading-[23px] font-['Space Grotesk'] text-black">
                  Say hi
                </p>
              </div>

              <div className="relative w-[145px] h-[28px] cursor-pointer" onClick={() => handleTypeChange('quote')}>
                <div className="absolute right-0 top-0 w-[28px] h-[28px] rounded-full border border-black bg-white"></div>
                {formData.type === 'quote' && (
                  <div className="absolute right-[8px] top-[6px] w-[16px] h-[16px] rounded-full bg-[#B9FF66]"></div>
                )}
                <p className="absolute right-[-135px] top-[2px] text-[18px] leading-[23px] font-['Space Grotesk'] text-black">
                  Get a quote
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 sm:gap-[25px] w-full">
              <div className="flex flex-col gap-[5px] w-full">
                <label className="text-[16px] leading-[28px] text-black font-['Space Grotesk']">Name</label>
                <div className="flex items-start px-[30px] py-[18px] gap-[10px] border border-black rounded-[14px] bg-white h-[59px]">
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name")}
                    className="text-[18px] leading-[23px] text-[#898989] w-full outline-none font-['Space Grotesk']"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[5px] w-full">
                <label className="text-[16px] leading-[28px] text-black font-['Space Grotesk']">Email*</label>
                <div className={`flex items-start py-[18px] px-[30px] gap-[10px] border rounded-[14px] bg-white h-[59px] ${errors.email ? 'border-[#FF6B6B]' : 'border-black'}`}>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    className="text-[18px] leading-[23px] text-[#898989] w-full outline-none font-['Space Grotesk']"
                  />
                </div>
                {errors.email && (
                  <span className="text-[#FF6B6B] font-['Space Grotesk'] text-[14px]">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-[5px] w-full">
                <label className="text-[16px] leading-[28px] text-black font-['Space Grotesk']">Message*</label>
                <div className={`flex items-start p-[18px_30px] gap-[10px] border rounded-[14px] bg-white h-[190px] ${errors.message ? 'border-[#FF6B6B]' : 'border-black'}`}>
                  <textarea
                    placeholder="Message"
                    {...register("message")}
                    className="text-[18px] leading-[23px] text-[#898989] w-full h-full resize-none outline-none font-['Space Grotesk']"
                  />
                </div>
                {errors.message && (
                  <span className="text-[#FF6B6B] font-['Space Grotesk'] text-[14px]">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 h-[90px]">
                <button
                  type="submit"
                  className="w-full h-[68px] bg-[#191A23] text-white text-[20px] leading-[28px] rounded-[14px] text-center font-['Space Grotesk'] hover:bg-[#292A32] transition-colors"
                >
                  Send Message
                </button>

                {isSubmitted && (
                  <div className="text-[#B9FF66] font-['Space Grotesk'] text-[16px] h-[20px]">
                    Merci pour votre message ! Nous reviendrons vers vous sous peu.
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className="absolute hidden md:block right-0 top-[60px] w-1/2 h-[90%] overflow-hidden">
            <img 
              src="/contact.svg"
              alt="Contact illustration"
              className="w-full h-full object-contain block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
