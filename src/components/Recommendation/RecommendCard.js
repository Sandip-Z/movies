import React from "react";
import {
  BsPlusCircleFill,
  BsXCircleFill,
  BsCalendarFill,
  BsFillInfoCircleFill,
  BsFillPersonFill,
} from "react-icons/bs";
// import moment from "moment";
import Icon from "../Atoms/Icon";

const RecommendCard = ({ movie }) => {
  return (
    <div className="recommend-card">
      <div className="d-flex align-items-center recommend-card__image">
        <img
          src={movie.movie.cover_image}
          className="recommend-card__image--img"
        />
      </div>
      <div className="recommend-card__detail">
        <div>
          <p className="recommend-card__detail--title">{movie.movie.name}</p>
        </div>
        <div>
          <p className="d-flex">
            <span className="mr-2">
              <BsFillInfoCircleFill />
            </span>
            <span className="truncate">{movie.movie.description}</span>
          </p>
        </div>
        <div className="recommend-card__detail--user">
          <p>
            <span className="mr-2">
              <BsFillPersonFill />
            </span>
            <span>{movie.recommendedBy.username}</span>
          </p>
        </div>
        <div className="justify-self-end">
          <p>
            {" "}
            <span className="mr-2">
              <BsCalendarFill />
            </span>
            <span>2 days ago</span>
          </p>
        </div>
        <div className="d-flex justify-content-end">
          <Icon
            component={
              <BsPlusCircleFill
                className="recommend-card__icon"
                title="Add to watch list"
                style={{ color: "#27ae60" }}
              />
            }
            style={{ marginRight: "10px" }}
          />
          <Icon
            component={
              <BsXCircleFill
                className="recommend-card__icon"
                title="Remove from recommendation list"
                style={{ color: "#c0392b" }}
              />
            }
            style={{ marginRight: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
