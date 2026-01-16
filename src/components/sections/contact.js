import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { StaticImage } from 'gatsby-plugin-image';
import { withPrefix } from 'gatsby';


const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 30px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(32px, 4vw, 48px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 30px;
    border-radius: 999px;
    cursor: url('/coin30.png') 16 16, pointer;
  }

  .highlight {
    color: var(--green);
    // font-weight: 500; /* optional */
  }
`;

// const StyledPic = styled.div`
//   position: relative;
//   max-width: 260px;
//   margin: 10px auto 0;

//   @media (max-width: 768px) {
//     width: 70%;
//     margin-top: 50px;
//   }

//   .wrapper {
//     ${({ theme }) => theme.mixins.boxShadow};
//     display: block;
//     position: relative;
//     width: 100%;
//     border-radius: var(--border-radius);
//     background-color: var(--green);

//     &:hover,
//     &:focus {
//       outline: 0;
//       transform: translate(-4px, -4px);

//       &:after {
//         transform: translate(8px, 8px);
//       }
//     }

//     .img {
//       position: relative;
//       border-radius: var(--border-radius);
//       transition: var(--transition);
//     }

//     &:before,
//     &:after {
//       content: '';
//       display: block;
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       border-radius: var(--border-radius);
//       transition: var(--transition);
//     }

//     &:after {
//       border: 2px solid var(--green);
//       top: 14px;
//       left: 14px;
//       z-index: -1;
//     }
//   }
// `;

const StyledVideo = styled.div`
  position: relative;
  max-width: 300px;
  margin: 20px auto 0;

  @media (max-width: 768px) {
    width: 70%;
    margin: 20px auto 0; 
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }
    }

    video {
      position: relative;
      width: 100%;
      display: block;
      border-radius: var(--border-radius);
      object-fit: cover;
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;


const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I enjoy connecting around <span class="highlight">questions</span>,  
        <span class="highlight"> ideas</span> and 
        <span class="highlight"> shared interests</span> aligned with my work; 
        or simply a <span class="highlight">hello</span><span>☺️</span> .
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Mail Me!
      </a>

      {/* <StyledPic>
        <div className="wrapper">
          <StaticImage
            className="img"
            src="../../images/2.jpg"
            width={500}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Contact"
          />
        </div>
      </StyledPic> */}
      <StyledVideo>
        <div className="wrapper">
          <video
            // src="/videos/mailme.mp4"
            src={withPrefix('/videos/mailme2.mp4')}
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            // style={{ width: '300px' }}
          />
        </div>
      </StyledVideo>
    </StyledContactSection>
  );
};

export default Contact;
