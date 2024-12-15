import { FooterText, FootTextWrapper } from './Footer.styles';

const Footer = () => {
    return (
    <FootTextWrapper className='foot-text-wrapper'>
      <FooterText>
        <marquee>
            This website is curated only for you and is little something I made to show how much you mean to me — I'm grateful for you, always 💕
        </marquee>
    </FooterText>
    </FootTextWrapper>
    );
}
  
  export default Footer;