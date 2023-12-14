import React from 'react';

const ContentBlock = ({ title, heading, paragraphs }) => (
  <div>
    <div>
      <p className="small-title-left">{title}</p>
      <h3 className="uk-h1">{heading}</h3>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  </div>
);

const ContentSection = ({ blocks }) => (
  <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@l" data-uk-grid>
    {blocks.map((block, index) => (
      <ContentBlock key={index} title={block.title} heading={block.heading} paragraphs={block.paragraphs} />
    ))}
  </div>
);

export default ContentSection;
