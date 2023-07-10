import React from 'react';
// import PropTypes from "prop-types";

import { StatList } from './StatList';

import css from "./statistics.module.css";

export const Statistics = ({title, statsDate}) => {
  
  return (<section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <StatList statsDate={statsDate} />
  </section>);
};

// StatList.propTypes = {
// }