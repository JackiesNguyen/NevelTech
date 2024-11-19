import Banner from "@/components/Banner/Banner";
import WrapperContainer from "@/components/WrapperContainer";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <WrapperContainer className="h-32">
        <h2>Home Page</h2>
      </WrapperContainer>
    </div>
  );
};

export default HomePage;
