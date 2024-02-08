import React from 'react';
import PropTypes from 'prop-types';

/**
 * ContentBlock Component: Represents a block of content with a title, heading, and paragraphs.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the content block.
 * @param {string} props.heading - The heading of the content block.
 * @param {Array} props.paragraphs - An array of paragraphs for the content block.
 * @returns {JSX.Element} - JSX for rendering the ContentBlock component.
 */
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

/**
 * ContentSection Component: Represents a section with multiple content blocks.
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.blocks - An array of content blocks for the section.
 * @returns {JSX.Element} - JSX for rendering the ContentSection component.
 */
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
