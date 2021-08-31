import React from 'react';
import PropTypes from 'prop-types';

export default function TableRaw({ Тип, Цена, Валюта }) {
  return (
    <>
      <td>{Тип}</td>
      <td>{Цена}</td>
      <td>{Валюта}</td>
    </>
  );
}

TableRaw.defaultProps = {
  Цена: 0,
};

TableRaw.propTypes = {
  Тип: PropTypes.string.isRequired,
  Валюта: PropTypes.string.isRequired,
  Цена: PropTypes.string,
};
