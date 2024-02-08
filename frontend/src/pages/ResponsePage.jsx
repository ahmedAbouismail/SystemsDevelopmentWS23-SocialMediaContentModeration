/* eslint-disable react/jsx-one-expression-per-line */
import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroJustText from '../components/hero-just-text';
import CardsImageSmall from '../components/cards-image-small';
/**
 * ResponsePage Component: Represents the response page on submitted texts.
 * Loads reponse of classifier
 * @returns {JSX.Element} for rendering
 */
function ResponsePage() {
  const location = useLocation();
  const res = location.state?.response || {};
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isHateSpeech = res['isHateSpeech:'];
  const categoryText = isHateSpeech ? `- ${res.classifierCategory}` : '';

  return (
    <>
      <HeroJustText
        text={`Hate Speech was ${
          isHateSpeech ? '' : 'NOT '
        }Recognized ${categoryText}`}
      />
      <div className='background-pfad-left'>
        <div className='uk-container'>
          <div
            className='uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@l uk-flex uk-flex-middle'
            data-uk-grid
          >
            <div>
              <div>
                <p className='small-title-left'>What now?</p>
                <h3 className='uk-h1'>Thank You..</h3>
                <p>
                  {res['isHateSpeech:'] ? (
                    <>
                      ..for taking the time to report a potential hate speech
                      post
                      {res.platform !== 'Other' && res.platform !== '' ? (
                        <>
                          {' '}
                          on <b>{res.platform}</b>.{' '}
                        </>
                      ) : (
                        <>. </>
                      )}
                      Your commitment to fostering a safer online community is
                      truly appreciated. We have received your report, and our
                      AI is currently analyzing the content. The category
                      assigned to the post is <b>{res.classifierCategory}</b>.
                      This category entails <b>{res.categoryDefinition}</b>.
                      Rest assured, your report has been securely stored, and
                      our team will thoroughly review the content.{'\n'}
                      {res.platform !== 'Other' && res.platform !== '' && (
                        <>
                          To take immediate action, we encourage you to report
                          the post directly on <b>{res.platform}</b> by visiting{' '}
                          <b>
                            <a
                              href={res.reportingLink}
                              target='_blank'
                              rel='noreferrer'
                            >
                              this link
                            </a>
                          </b>
                          .{'\n'}
                        </>
                      )}
                      Thank you again for being an active advocate for a
                      positive online experience across the internet.
                    </>
                  ) : (
                    <>
                      ..for taking the time to report a potential hate speech
                      post
                      {res.platform !== 'Other' && res.platform !== '' ? (
                        <>
                          {' '}
                          on <b>{res.platform}</b>.{' '}
                        </>
                      ) : (
                        <>. </>
                      )}
                      Your commitment to fostering a safer online community is
                      truly appreciated. After thorough analysis, our AI was
                      unable to conclusively determine whether the reported
                      content constitutes hate speech. The nuances of language
                      and context can sometimes pose challenges, and we
                      understand the importance of maintaining a vigilant
                      approach. Rest assured, your report has been securely
                      stored, and our team will thoroughly review the content.
                      {'\n'}
                      {res.platform !== 'Other' && res.platform !== '' && (
                        <>
                          If the post feels in violation of{' '}
                          <b>{res.platform}</b>&apos;s community guidelines, we
                          encourage you to report the post directly on{' '}
                          <b>{res.platform}</b> by visiting
                          <b>
                            <a
                              href={res.reportingLink}
                              target='_blank'
                              rel='noreferrer'
                            >
                              {' '}
                              this link
                            </a>
                          </b>
                          .{'\n'}
                        </>
                      )}
                      Keep in mind that our AI is still in training, and your
                      additional input on the platform can contribute to its
                      learning process.
                      <br />
                      <br />
                      Thank you again for being an active advocate for a
                      positive online experience across the internet.
                    </>
                  )}
                  <br />
                  <br />
                  Best regards,
                  <br />
                  The NoHateNet team
                </p>
              </div>
            </div>

            <div>
              <div
                className='uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-2@m uk-grid-match'
                data-uk-height-match='target: .uk-card'
                data-uk-grid
              >
                <CardsImageSmall
                  name='Read More about Hate Speech'
                  url='/hate-speech'
                  image='hate.png'
                  alt='hate'
                />
                <CardsImageSmall
                  name='Read More about the Consequences of Hate Speech'
                  url='/hate-speech'
                  image='consequence.png'
                  alt='consequence'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='uk-container'>
          <div
            className='uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@l'
            data-uk-grid
          >
            <div>
              <p className='small-title-left'>
                Please do not hesitate to contact us
              </p>
              <h3 className='uk-h1'>Next Steps</h3>
              <p>
                {res['isHateSpeech:'] ? (
                  <>
                    Upon identification of hate speech by our advanced
                    classifier on NoHateNet, immediate action is initiated. Our
                    dedicated team thoroughly reviews the reported content to
                    ensure accuracy in identifying harmful elements.
                    Subsequently, decisive measures are implemented, ranging
                    from content removal and warnings to user sanctions, in
                    strict adherence to our policies. Simultaneously, the
                    incident contributes to refining our classifier, enhancing
                    its ability to proactively combat hate speech. This
                    collaborative approach, integrating technology and human
                    oversight, underscores our commitment to cultivating a
                    digital environment that prioritizes safety, inclusivity,
                    and respect for all users.
                  </>
                ) : (
                  <>
                    If you have any further information or concerns, feel free
                    to reach out to us.
                  </>
                )}
              </p>
              {/*  providing link instead of contact form */}
              <div>
                <a
                  className='uk-button uk-button-secondary'
                  href='mailto:info@stop-hate-speech'
                >
                  Contact us
                </a>
              </div>
            </div>

            <div className='uk-flex-first uk-flex-last@l'>
              <div className='uk-box-shadow-medium uk-border-rounded uk-background-default responsive-image-height-m'>
                <img
                  src='/assets/img/hands-with-smarthphone.jpg'
                  className='uk-border-rounded'
                  alt='Mann melde Post'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResponsePage;
