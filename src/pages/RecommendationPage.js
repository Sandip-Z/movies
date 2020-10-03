import React from "react";
import RecommendationCard from "../components/Recommendation/RecommendCard";

const data = [
  {
    id: 1,
    movie: {
      name: "Hello Gangstar",
      id: 20,
      description:
        "When Simons dog is taken from him, he stops at nothing to get her back.",
      cover_image:
        "https://yts.mx/assets/images/movies/hello_gangster_2016/medium-cover.jpg",
    },
    recommendedBy: {
      username: "Sandip Satyal",
      uid: "17895",
    },
    recommendAt: Date.now(),
  },
  {
    id: 1,
    movie: {
      name: "Hello Gangstar",
      id: 20,
      description:
        "When Simons dogWhen Simons dog is taken from him, he stops at nothing to get her back.When Simons dog is taken from him, he stops at nothing to get her back.When Simons dog is taken from him, he stops at nothing to get her back.When Simons dog is taken from him, he stops at nothing to get her back.When Simons dog is taken from him, he stops at nothing to get her back.When Simons dog is taken from him, he stops at nothing to get her back.When Simons dog is taken from him, he stops at nothing to get her back.When Simons dog is taken from him, he stops at nothing to get her back.When Simons dog is taken from him, he stops at nothing to get her back.When Simons dog is taken from him, he stops at nothing to get her back. is taken from him, he stops at nothing to get her back.",
      cover_image:
        "https://yts.mx/assets/images/movies/hello_gangster_2016/medium-cover.jpg",
    },
    recommendedBy: {
      username: "Sandip Satyal",
      uid: "17895",
    },
    recommendAt: Date.now(),
  },
];

const RecommendationPage = () => {
  const renderList = data.map((movie) => {
    return <RecommendationCard movie={movie} />;
  });
  return (
    <>
      <div className="recommended-box">
        <div>
          <h5 className="recommended-box__title">recommendation List</h5>
        </div>
        <div className="my-5">{renderList}</div>
      </div>
    </>
  );
};

export default RecommendationPage;
