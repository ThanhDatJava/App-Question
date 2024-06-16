import videoHomepage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);
  console.log("account", account, "isAuthenticated", isAuthenticated);
  return (
    <>
      <div className="homepage-container">
        <video autoPlay muted loop>
          <source src={videoHomepage} type="video/mp4" />
        </video>
        <div className="homepage-content">
          <div className="title-1">Make a difference :</div>
          <div className="title-2">
            Explore the treasure of knowledge to shape the future and innovate
          </div>
          <div className="title-3">
            <button>Get's started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
