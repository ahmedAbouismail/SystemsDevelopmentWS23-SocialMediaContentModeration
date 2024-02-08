import { React } from 'react';
import HeroJustText from '../components/hero-just-text';
import AccordionComponent from '../components/accordion';
import ContentSection from '../components/content-section';

/**
 * HateSpeechPage Component: Represents the Hate Speech page.
 * Provides information about various forms of hate speech, examples, and ways to address it.
 * @returns {JSX.Element} JSX for rendering the HateSpeechPage component.
 */
function HateSpeechPage() {
  const accordionItems = [
    {
      id: 0,
      title: 'Racism',
      content: [
        // eslint-disable-next-line quotes
        "Racism involves prejudice, discrimination, or antagonism directed against someone of a different race based on the belief that one's own race is superior.",
        'Example: Offensive remarks, stereotypes, or discriminatory actions targeting individuals or communities based on their racial background.',
      ],
    },
    {
      id: 1,
      title: 'Homophobia',
      content: [
        'Homophobia refers to an irrational fear or hatred of, or prejudice and discrimination against, homosexual people.',
        'Example: Derogatory comments, slurs, or discriminatory behavior towards individuals based on their sexual orientation.',
      ],
    },
    {
      id: 2,
      title: 'Sexism',
      content: [
        'Sexism is the discrimination, stereotyping, or prejudice, typically against women, on the basis of sex.',
        'Example: Gender-based discrimination, unequal treatment, or offensive comments targeting individuals due to their gender.',
      ],
    },
    {
      id: 3,
      title: 'Religious discrimination',
      content: [
        'Religious discrimination involves treating individuals unfairly due to their religious beliefs or practices.',
        'Example: Hate speech or bias against individuals of a particular religion, including derogatory comments or exclusionary practices.',
      ],
    },
    {
      id: 4,
      title: 'Xenophobia',
      content: [
        'Xenophobia is the irrational fear, dislike, or prejudice against people from other countries.',
        'Example: Hostile attitudes, discrimination, or inflammatory rhetoric directed at individuals or groups based on their nationality or foreign origin.',
      ],
    },
    {
      id: 5,
      title: 'Dehumanization',
      content: [
        'Dehumanization involves portraying individuals or groups as less than human, stripping them of their dignity and humanity.',
        'Example: Using language or imagery that reduces individuals to objects, animals, or implies they are inferior and unworthy of respect or empathy.',
      ],
    },
  ];

  const contentBlocks = [
    {
      id: 0,
      title: 'The Impact of Hate Speech',
      heading: 'The Profound Impact of Hate Speech on Those Affected',
      paragraphs: [
        'Hate speech casts a dark shadow over the fabric of society, leaving a profound and damaging impact on individuals and communities.',
        'Beyond its immediate harm, hate speech can foster a climate of fear, erode trust, and fracture social cohesion.',
        'It fuels discrimination, contributes to mental health issues, and can escalate into real-world violence.',
        'Moreover, the ripple effect extends to marginalized groups, creating barriers to education, employment, and overall well-being.',
        'By understanding the far-reaching consequences of hate speech, we recognize the urgency of combating it, fostering a digital landscape where empathy, understanding, and respect prevail.',
      ],
    },
    {
      id: 1,
      title: 'What to do about Hate Speech?',
      heading: 'Recognizing and Naming Hate Speech',
      paragraphs: [
        'Addressing hate speech requires a collective effort and a commitment to fostering positive change.',
        'When encountering hate speech online, report the content through dedicated platforms or channels, contributing to the identification and mitigation of harmful material.',
        'Encourage open dialogue and education to promote understanding, challenging prejudiced beliefs.',
        'Support organizations and initiatives actively working against hate speech, and be an ally to those affected by its impact.',
        'By fostering awareness, promoting inclusivity, and standing united against hate, we can collectively create a safer and more respectful digital space for everyone.',
      ],
    },
  ];

  return (
    <>
      {/* Hero section with just text */}
      <HeroJustText text='Hate Speech' />
      {/* Main content section */}
      <div className='background-pfad-left'>
        <div className='uk-container'>
          {/* Grid layout for main content */}
          <div
            className='uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@l'
            data-uk-grid
          >
            {/* Left column - Examples of Hate Speech */}
            <div>
              <div>
                <p className='small-title-left'>Examples of Hate Speech</p>
                <h3 className='uk-h1'>Digital Violence has many Faces</h3>
                <AccordionComponent items={accordionItems} />
              </div>
            </div>
            {/* Right column - Image */}
            <div className='uk-flex-first uk-flex-last@l'>
              <div className='uk-box-shadow-medium uk-border-rounded uk-background-default'>
                <img
                  src='/assets/img/smartphone-with-text.png'
                  className='uk-border-rounded'
                  alt='Mann melde Post'
                />
              </div>
            </div>
          </div>

          <ContentSection blocks={contentBlocks} />
        </div>
      </div>
    </>
  );
}

export default HateSpeechPage;
