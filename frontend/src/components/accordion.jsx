/* eslint-disable jsx-a11y/anchor-is-valid */
/* because of UIkit template */
import React from 'react';
import PropTypes from 'prop-types';

function AccordionComponent({ items }) {
  return (
    <ul uk-accordion='multiple: true'>
      {items.map((item) => (
        <li key={item.index}>
          <a className='uk-accordion-title' href='#'>
            {item.title}
          </a>
          <div className='uk-accordion-content'>
            <p>{item.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

AccordionComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default AccordionComponent;
