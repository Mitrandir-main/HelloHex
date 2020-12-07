import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPizzaSlice,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElement";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Favourite Movies</FooterLinkTitle>
              <FooterLink>The Lord of the Rings trilogy</FooterLink>
              <FooterLink>Star Wars original trilogy</FooterLink>
              <FooterLink>Whiplash</FooterLink>
              <FooterLink>Interstellar</FooterLink>
              <FooterLink>Batman trilogy</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>TV Shows</FooterLinkTitle>
              <FooterLink>True Detective</FooterLink>
              <FooterLink>Sherlock</FooterLink>
              <FooterLink>Breaking Bad</FooterLink>
              <FooterLink>Silicon Valley</FooterLink>
              <FooterLink>Rick and Morty</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Books</FooterLinkTitle>
              <FooterLink>Steve Jobs biography</FooterLink>
              <FooterLink>Hobbit</FooterLink>
              <FooterLink>The Doors of Perception </FooterLink>
              <FooterLink>Elon Musk biography</FooterLink>
              <FooterLink>The Count of Monte Cristo</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink>How it works</FooterLink>
              <FooterLink>Testimonials</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Investors</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Dian Kumanov</SocialLogo>
            <WebsiteRights>
              DK © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/dian.kumanov"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/dido_1912/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/dian-kumanov/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/Mitrandir-main"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://1drv.ms/b/s!Am195r3tOzNGgnqjJmW8pYOvxbJG?e=QjQwqh"
                target="_blank"
                aria-label="CV"
              >
                <FaPizzaSlice />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
