import React from "react";
import { HomeBadge } from "../../components";
import ContactBadgeImage from "../../assets/contact/ContactBadge.png";
import ContactIcon from "../../assets/contact/Icon.png";
import Facebook from "../../assets/contact/Facebook.png";
import Twitter from "../../assets/contact/Twitter.png";
import Linkedin from "../../assets/contact/LinkedIn.png";
import Insta from "../../assets/contact/Instagram.png";
import Youtube from "../../assets/contact/YouTube.png";
const Contact = () => {
  const badgeData = {
    badgeImage: ContactBadgeImage,
    icon: ContactIcon,
    text: "Follow us on social media",
    heading: "CONTACT US",
    page: "Contact",
    socialIcons: [Facebook, Twitter, Insta, Linkedin, Youtube],
  };
  return (
    <div>
      <HomeBadge badgeData={badgeData} />
    </div>
  );
};

export default Contact;
