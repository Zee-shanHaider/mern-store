import React from "react";
import { HomeBadge } from "../../components";
import ContactBadgeImage from "../../assets/contact/ContactBadge.png";
import ContactIcon from "../../assets/contact/Icon.png";
import Facebook from "../../assets/contact/Facebook.png";
import Twitter from "../../assets/contact/Twitter.png";
import Linkedin from "../../assets/contact/LinkedIn.png";
import Insta from "../../assets/contact/Instagram.png";
import Youtube from "../../assets/contact/YouTube.png";
import ContactForm from "./components/ContactForm";
const Contact = () => {
  const badgeData = {
    badgeImage: ContactBadgeImage,
    icon: ContactIcon,
    text: "Follow us on social media",
    heading: "CONTACT US",
    page: "Contact",
    socialIcons: [Facebook, Twitter, Insta, Linkedin, Youtube],
  };
  const contactInfo = [
    { label: "Office hours:", value: "Monday - Friday 8:00 am to 5:00 pm" },
    { label: "Email:", value: "contact@company.com" },
    { label: "Phone:", value: "(414) 687 - 5892" },
    {
      label: "Location:",
      value: "59 Middle Point Rd <br /> San Francisco, 80412",
    },
  ];
  return (
    <div className="flex flex-col gap-6 items-center">
      <HomeBadge badgeData={badgeData} />
      <div className="flex flex-col items-center justify-center">
        <div className="md:text-2xl text-xl font-bold text-center">
          Get in touch with us
        </div>
        <p className="font-normal text-base w-3/4 text-center text-primary-500">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam.
        </p>
      </div>
      <div className="flex flex-col gap-4 text-center">
        {contactInfo.map((info, index) => (
          <div key={index}>
            <div className="text-base">{info.label}</div>
            <div
              className="text-brown-200"
              dangerouslySetInnerHTML={{ __html: info.value }}
            ></div>
          </div>
        ))}
      </div>
      <ContactForm />
      <iframe
        title="imap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.1505724711483!2d74.34069007589586!3d31.52002417421411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905c0d39fb72f%3A0xa5c1994a4a6a827a!2sThe%20Hexaa!5e0!3m2!1sen!2s!4v1715246615011!5m2!1sen!2s"
        className="w-full h-96"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Contact;
