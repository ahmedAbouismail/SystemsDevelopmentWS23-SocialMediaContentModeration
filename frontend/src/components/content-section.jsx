import React from 'react';
import PropTypes from 'prop-types';

function ContentBlock({ title, heading, paragraphs }) {
  return (
    <div>
      <p className='small-title-left'>{title}</p>
      <h3 className='uk-h1'>{heading}</h3>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.id}>{paragraph}</p>
      ))}
    </div>
  );
}

ContentBlock.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function ContentSection({ blocks }) {
  return (
    <div className='uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@l' data-uk-grid>
      {blocks.map((block) => (
        <ContentBlock
          key={block.id}
          title={block.title}
          heading={block.heading}
          paragraphs={block.paragraphs}
        />
      ))}
    </div>
  );
}

ContentSection.propTypes = {
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

export default ContentSection;
