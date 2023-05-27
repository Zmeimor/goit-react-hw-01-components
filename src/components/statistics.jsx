import React from 'react';

import { StatList } from './statrendelement';

import css from "./statistics.module.css";

export const Statistics = ({title, statsDate}) => {
  
  return (<section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <StatList statsDate={statsDate} />
  </section>);
};

  
    