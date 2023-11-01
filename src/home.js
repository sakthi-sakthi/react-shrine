import Footer from "./components/footer";
import Header from "./components/header";
import Scrollbar from "./components/scrollbar";
import Slider from "./components/slider";
import Firstrow from "./components/firstrow";
import Secondrow from "./components/secondrow";
import Thirdrow from "./components/thirdrow";
import Lastrow from "./components/lastrow";

function Home() {
  return (
    <div>
      <Header />
      <Slider />

      <div className="container-fluid">
        <Scrollbar />
        <Firstrow />
        <Secondrow />
        <Thirdrow />
        <Lastrow />
        <br/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
