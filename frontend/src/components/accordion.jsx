import React from 'react';

const AccordionComponent = ({items}) => {

    return (
      <ul uk-accordion="multiple: true">
        {items.map((item, index) => (
          <li key={index}>
            <a className="uk-accordion-title" href="#">
              {item.title}
            </a>
            <div className="uk-accordion-content">
              <p>{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  };

export default AccordionComponent;
