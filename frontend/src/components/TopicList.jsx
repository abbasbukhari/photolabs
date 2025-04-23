import React from "react";
import "../styles/TopicList.scss";

const TopicList = ({ topics = [] }) => {
  return (
    <div className="topic-list">
      {topics.map((topic, index) => (
        <button key={index} className="topic-list__item">
          {topic.name}
        </button>
      ))}
    </div>
  );
};

export default TopicList;
