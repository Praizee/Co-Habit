import React from "react";
import CoHabit from "../../assets/Cohabit Logo B 1.png"
import FooterLine from "../../assets/Footer-Line.svg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  // date for copyright
  const theDate = new Date().getFullYear();
  // end of date

  return (
    <div className="bg-[#010886] text-[#D6DDEB] ">
      <footer id="footer"
        className="footer laptop:p-10 p-6 max-w-[90%] laptop:mx-[8rem] mx-0">
        <div className="laptop:-mr-[9rem] laptop:-ml-10">
          <img src={CoHabit} className="-ml-5" alt="web-logo" />
          <p className="laptop:w-auto tablet:w-[21rem] laptop:mr-36 text-[1rem] font-normal leading-[1.6rem] laptop:mt-5">
            Our mission is to help people find <br className="hidden laptop:flex" />
            affordable homes
            with a seamless and <br className="hidden laptop:flex" />
            rewarding shared experiences.
          </p>

          <div className="tablet:block mt-6 hidden laptop:hidden">
            <span className="font-medium text-[1.125rem] laptop:mb-4">Get notifications</span>
            <p className="leading-[1.6rem] tablet:mt-4 tablet:w-[80%]">
              The latest news, articles, sent to your <br className="hidden laptop:flex" />
              inbox weekly.
            </p>
            <div className="flex-col tablet:w-[20rem] tablet:mt-2 laptop:w-[18rem]">
              <div className="relative">
                <input type="email"
                  placeholder="Email Address"
                  // required
                  className="input tablet:input laptop:input input-bordered rounded-none text-[#A8ADB7] w-full bg-white pr-16 mr-6" />
                <button className="btn hover:bg-[#DF8026] mt-3 laptop:mt-0 tablet:mt-0 tablet:w-[] bg-[#df7f26f2] text-black font-bold text-[1.125rem] normal-case laptop:absolute tablet:absolute top-0 right-0 rounded-none laptop:rounded-lg border-none tablet:rounded-lg tablet:rounded-l-none laptop:rounded-l-none">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" footer flex justify-between laptop:hidden tablet:">
          <div className="laptop:ml-[2.5rem]">
            <span className="font-medium text-[1.125rem] laptop:mb-4">About</span>
            <a className="link link-hover font-normal leading-[1.6rem]">Companies</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Pricing</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Terms</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Advice</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Privacy Policy</a>
          </div>
          <div>
            <span className="font-medium text-[1.125rem] laptop:mb-4">Resources</span>
            <a className="link link-hover font-normal leading-[1.6rem]">Help Docs</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Guide</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Updates</a>
            <a className="link link-hover font-normal">Contact Us</a>
          </div>
        </div>

        <div className=" hidden laptop:footer tablet:">
          <div className="laptop:ml-[2.5rem]">
            <span className="font-medium text-[1.125rem] laptop:mb-4">About</span>
            <a className="link link-hover font-normal leading-[1.6rem]">Companies</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Pricing</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Terms</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Advice</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Privacy Policy</a>
          </div>
          <div>
            <span className="font-medium text-[1.125rem] laptop:mb-4">Resources</span>
            <a className="link link-hover font-normal leading-[1.6rem]">Help Docs</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Guide</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Updates</a>
            <a className="link link-hover font-normal">Contact Us</a>
          </div>
        </div>

        <div className="tablet:hidden laptop:block">
          <span className="font-medium text-[1.125rem] laptop:mb-4">Get notifications</span>
          <p className="leading-[1.6rem] laptop:w-full laptop:mt-6 tablet:w-[80%]">
            The latest news, articles, sent to your <br className="hidden laptop:flex" />
            inbox weekly.
          </p>
          <div className="flex-col w-[18rem] laptop:mt-3 tablet:w-[14rem] laptop:w-[23rem]">
            <div className="relative">
              <input type="email"
                placeholder="Email Address"
                // required
                className="input tablet:input laptop:input input-bordered rounded-none text-[#A8ADB7] laptop:w-full bg-white pr-16 mr-6" />
              <button className="btn hover:bg-[#DF8026] mt-3 laptop:mt-0 tablet:mt-0 tablet:w-[] bg-[#df7f26f2] text-black font-bold text-[1.125rem] normal-case laptop:absolute tablet:absolute top-0 right-0 rounded-none laptop:rounded-lg border-none tablet:rounded-lg tablet:rounded-l-none laptop:rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>

      <img src={FooterLine} className="w-[80%] laptop:mx-[8rem]" alt="footer-line" />

      <div className="laptop:flex tablet:flex tablet:mx-6 tablet:justify-between laptop:mx-[8rem] laptop:py-6 mx-auto">

        {/* copyright */}
        <p className="py-4 copyright laptop:mr-[31rem] hidden laptop:block tablet:block text-[#ffffff74] text-center">
          <span>{theDate} </span>
          @
          Co-habit.
          All rights reserved.
        </p>

        <p className="py-4 copyright laptop:mr-[31rem] laptop:hidden tablet:hidden text-[#ffffff74] text-left mx-6">
          <span>{theDate} </span>
          @
          Co-habit.
          All rights reserved.
        </p>
        {/* end of copyright */}

        <div className="py-2 laptop:flex mx-6 laptop:mx-0 tablet:mx-0 tablet:text-center">
          <a href="#" className="mr-4">
            <FacebookIcon sx={{ fontSize: "2.3rem" }} className="social-icon border-none rounded-full p-2 bg-[#ffffff1e]" />
          </a>
          <a href="#" className="mr-4">
            <InstagramIcon sx={{ fontSize: "2.3rem" }} className="social-icon border-none rounded-full p-2 bg-[#ffffff1e]" />
          </a>
          <a href="#" className="mr-4">
            <LinkedInIcon sx={{ fontSize: "2.3rem" }} className="social-icon border-none rounded-full p-2 bg-[#ffffff1e]" />
          </a>
          <a href="#" className="mr-4">
            <TwitterIcon sx={{ fontSize: "2.3rem" }} className="social-icon border-none rounded-full p-2 bg-[#ffffff1e]" />
          </a>
          <a href="#" className="">
            <YouTubeIcon sx={{ fontSize: "2.3rem" }} className="social-icon border-none rounded-full p-2 bg-[#ffffff1e]" />
          </a>

        </div>
      </div>

    </div>

  );
};

export default Footer;