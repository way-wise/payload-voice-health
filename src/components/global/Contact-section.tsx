import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="bg-[#5F46CF] py-10 md:py-16">
      <div className="container flex flex-col xl:flex-row items-center xl:justify-between gap-10">
        <div className="flex flex-col gap-6 max-w-[546px]">
          <h2 className="text-[26px] md:text-[40px] text-white font-Inter font-semibold leading-[36px] md:leading-[48px] tracking-[-1px]">
            Have questions or need a custom solution? Reach out to us!
          </h2>
          <Link
            href="mailto:info@voicehealth.ai"
            className="flex items-center md:gap-3 gap-1 md:text-[20px] text-base text-white font-Inter font-normal md:leading-7 leading-6"
          >
            <i className="ri-mail-send-line size-6"></i>info@voicehealth.ai
          </Link>
          <Link
            href="/contact"
            className="text-[14px] font-Inter font-semibold leading-[130%] md:flex hidden items-center gap-2 bg-white text-[#5F46CF] px-7 py-[14px] rounded-md transition-colors group w-fit"
          >
            Get in touch
            <i className="ri-arrow-right-up-line group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </div>
        <div className="w-full h-[300px] rounded-[16px] md:max-w-[662px] md:h-[360px] px-6 md:px-0 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90599.50080836462!2d-107.12488582771243!3d44.79640974859989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fa943c6fad65%3A0x293a47fe7b11d57b!2sSheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2sbd!4v1746965927921!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
