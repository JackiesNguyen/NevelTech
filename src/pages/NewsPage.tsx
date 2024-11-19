import Banner from "@/components/Banner/Banner";
import WrapperContainer from "@/components/WrapperContainer";

const NewsPage = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <WrapperContainer className="h-32">
        <h2>NewsPage</h2>
      </WrapperContainer>
    </div>
  );
};

export default NewsPage;
