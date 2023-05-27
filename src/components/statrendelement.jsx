import PropTypes from "prop-types";
import React from 'react';
import css from "./statistics.module.css";

const StatCard = ({ label, percentage }) => {
  return (
    <div className={css.card}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </div>
  );
};

StatCard.propTypes = {
  // id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
}

export const StatList = ({statsDate}) => {
  // console.log(statsAr)
  return (
  <ul className={css.list}>
      {statsDate.map(el => (
        <li className={css.item} key={el.id}>
          <StatCard
            label={el.label}
            percentage={el.percentage}
             />
        </li>
      ))}
  </ul>
);
};

