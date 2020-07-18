import React from "react";
import Card from "./Card";

const testData = [
  {
    login: "mojombo",
    id: 1,
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    company: "Facebook",
  },
  {
    login: "defunkt",
    id: 2,
    avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
    company: "Twitter",
  },
  {
    login: "pjhyett",
    id: 3,
    avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
    company: "Avon",
  },
];

const CardList = (props) => (
  <div>
    {testData.map((profile) => (
      <Card {...profile} />
    ))}
  </div>
);

export default CardList;
