import { Container } from './MainContent.styles';
import MainCard from './MainCard/MainCard';
import InteractiveCard from './InteractiveCard/InteractiveCard';
import Footer from './FooterComponent/Footer';

const MainContent = () => {
  return (
    <Container className="Main">
      <MainCard/>
      <InteractiveCard/>
      <Footer/>
    </Container>
  );
}

export default MainContent;