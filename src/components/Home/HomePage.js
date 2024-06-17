import videoHomepage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
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
            {isAuthenticated === false ? (
              <button
                className="px-3"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Get's started. It's free{" "}
              </button>
            ) : (
              <button
                className="px-3"
                onClick={() => {
                  navigate("/users");
                }}
              >
                Doing Quiz Now
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
