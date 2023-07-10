import PropTypes from "prop-types";
import React from 'react';
import css from "./statistics.module.css";

export const StatCard = ({ label, percentage }) => {
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

