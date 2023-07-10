// import PropTypes from "prop-types";
import React from 'react';
import css from "./statistics.module.css";
import { StatCard } from "./StatCard";

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
  // StatList.propTypes = {
  // }