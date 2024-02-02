import React from 'react';

const AccordionComponent = ({ items }) => {
  return (
    <ul uk-accordion='multiple: true'>
      {items.map((item, index) => (
        <li key={index}>
          <button
            className='uk-accordion-title'
            href='#'
            style={{
              border: 'none',
              padding: 0,
              background: 'none',
              cursor: 'pointer',
            }}
          >
            {item.title}
          </button>
          <div className='uk-accordion-content'>
            <p>{item.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AccordionComponent;
