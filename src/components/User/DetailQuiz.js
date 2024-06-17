import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDataQuiz } from "../../services/apiServices";
import _, { set } from "lodash";
import "./DetailQuiz.scss";
import { useLocation } from "react-router";
import Question from "./Question";
const DetailQuiz = (props) => {
  const params = useParams();
  const location = useLocation();
  const quizId = params.id;

  const [dataQuiz, setDataQuiz] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, [quizId]);
  const fetchQuestions = async () => {
    let res = await getDataQuiz(quizId);

    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        .groupBy("id")
        .map((value, key) => {
          let answers = [];
          let questionDescription,
            image = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            answers.push(item.answers);
          });

          return { questionId: key, answers, questionDescription, image };
        })
        .value();
      console.log(data);
      setDataQuiz(data);
    }
  };

  const handleBack = () => {
    if (index - 1 < 0) return;
    setIndex(index - 1);
  };
  const handleNext = () => {
    if (dataQuiz && dataQuiz.length > index + 1) setIndex(index + 1);
  };
  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title">
          Quiz {quizId}: {location?.state?.quizTitle}
        </div>
        <hr />
        <div className="q-body"></div>
        <div className="q-content">
          <Question
            index={index}
            data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
          />
        </div>
        <div className="footer">
          <button className="btn btn-secondary" onClick={() => handleBack()}>
            Back
          </button>
          <button className="btn btn-primary " onClick={() => handleNext()}>
            Next
          </button>
          <button className="btn btn-warning " onClick={() => handleNext()}>
            Finish
          </button>
        </div>
      </div>
      <div className="right-content"> count down</div>
    </div>
  );
};
export default DetailQuiz;
