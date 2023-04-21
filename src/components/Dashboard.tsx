import React from "react";
import YandexMap from "./YandexMap";
import StatInfo from "./StatInfo";

const Dashboard: React.FC = () => {
  return (
    <>
      <StatInfo/>
      <YandexMap />
    </>
  );
};

export default Dashboard;
