import styled from "styled-components";
import { FaBook, FaUsers, FaHeadset } from "react-icons/fa"; // Importing icons

const HomeSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 15px;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: #fff;
  border-radius: 15px;
  margin-bottom: 50px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;

const SectionHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
  font-family: 'Gloock', serif;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  max-width: 700px;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 30px;
  color: #e3e3e3;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
`;

const FeatureCardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap; /* Allow wrapping of cards */
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const FeatureCard = styled.div`
  background: #fff;
  color: #333;
  padding: 20px;
  border-radius: 15px;
  width: 280px;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

const FeatureCardHeader = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
  font-family: 'Gloock', serif;
  color: #6a11cb;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FeatureCardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  color: #2575fc;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
`;



const HomeSection = () => {
  return (
    <HomeSectionContainer>
      <SectionHeader>Explore Campus Services</SectionHeader>
      <SectionDescription>
        Discover all the resources and opportunities available on campus. From academic support to extracurricular activities,
        we have everything you need to succeed and thrive.
      </SectionDescription>
      <FeatureCardContainer>
        <FeatureCard>
          <FeatureIcon>
            <FaBook />
          </FeatureIcon>
          <FeatureCardHeader>Library Access</FeatureCardHeader>
          <FeatureCardDescription>
            Get instant access to our extensive library resources, including e-books, journals, and research tools.
          </FeatureCardDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>
            <FaUsers />
          </FeatureIcon>
          <FeatureCardHeader>Student Groups</FeatureCardHeader>
          <FeatureCardDescription>
            Join diverse student communities to expand your network and enrich your campus experience.
          </FeatureCardDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>
            <FaHeadset />
          </FeatureIcon>
          <FeatureCardHeader>24/7 Support</FeatureCardHeader>
          <FeatureCardDescription>
            Access dedicated support for academic, personal, and technical issues anytime, anywhere.
          </FeatureCardDescription>
        </FeatureCard>
      </FeatureCardContainer>
    </HomeSectionContainer>
  );
};

export default HomeSection;
