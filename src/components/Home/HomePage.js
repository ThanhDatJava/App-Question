import videoHomepage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useTranslation, Trans } from "react-i18next";
const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <div className="homepage-container">
        <video autoPlay muted loop>
          <source src={videoHomepage} type="video/mp4" />
        </video>
        <div className="homepage-content">
          <div className="title-1">{t("homepage.title1")}</div>
          <div className="title-2">{t("homepage.title2")}</div>
          <div className="title-3">
            {isAuthenticated === false ? (
              <button
                className="px-3"
                onClick={() => {
                  navigate("/login");
                }}
              >
                {t("homepage.title4")}
              </button>
            ) : (
              <button
                className="px-3"
                onClick={() => {
                  navigate("/users");
                }}
              >
                {t("homepage.title3")}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
