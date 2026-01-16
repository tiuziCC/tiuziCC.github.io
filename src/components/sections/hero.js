import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 110vh;
  // padding: 0;

  // @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
  //   height: auto;
  //   min-height: unset; 
  //   padding-top: calc(var(--nav-height) + 7px);
  // }
  padding-top: var(--nav-height);


  padding-top: calc(var(--nav-height) + 20px);
  }

  // @media (max-width: 768px) {
  //   height: auto;
  //   min-height: unset;
  //   padding-top: calc(var(--nav-height) + 20px);
    

  // }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 30px;
    border-radius: 999px;
    cursor: url('/coin30.png') 16 16, pointer;
  }

  .divider {
    color: var(--green);
    opacity: 0.8;
  }

  .iam-line {
    margin-top: 6px;
    line-height: 1.4;
  }
`;

//add


const Marquee = styled.div`
  // width: 100%;
  width: 600px;
  max-width: 90vw;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 15px;

  .track {
    display: inline-flex;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 88s linear infinite;
  }

  &:hover .track {
    animation-play-state: paused;
  }

  span {
    display: inline-flex;
    align-items: center;
    margin-right: 0px;
    font-family: var(--font-mono);
    font-size: clamp(16px, 3vw, 22px);
    color: var(--slate);
  }

  span em {
    font-style: normal;
    margin: 0 13px;
    color: var(--green);
    opacity: 0.85;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .track {
      animation: none;
    }
  }
`;



const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hej hej! Welcome<span>☺️</span></h1>;
  const two = <h2 className="large-heading">Sysy <span className="divider">|</span> Sizhe Chen</h2>;
  // const three = <h3 className="medium-heading">Optimize. Apply. Enjoy.</h3>;
  // const three = (
  // <h3 className="medium-heading">
  //   Optimize. Apply. Enjoy. <span aria-hidden>↺</span>
  // </h3>
  // );  
  const three = (
  <Marquee>
    <div className="track">
      <span>Optimize <em>▸</em> Execute <em>▸</em> Enjoy <em>▸</em> Reflect <em>▸</em></span>
      <span>Optimize <em>▸</em> Execute <em>▸</em> Enjoy <em>▸</em> Reflect <em>▸</em></span>
      <span>Optimize <em>▸</em> Execute <em>▸</em> Enjoy <em>▸</em> Reflect <em>▸</em></span>
      <span>Optimize <em>▸</em> Execute <em>▸</em> Enjoy <em>▸</em> Reflect <em>▸</em></span>

      <span>Optimize <em>▸</em> Execute <em>▸</em> Enjoy <em>▸</em> Reflect <em>▸</em></span>
      <span>Optimize <em>▸</em> Execute <em>▸</em> Enjoy <em>▸</em> Reflect <em>▸</em></span>
      <span>Optimize <em>▸</em> Execute <em>▸</em> Enjoy <em>▸</em> Reflect <em>▸</em></span>
      <span>Optimize <em>▸</em> Execute <em>▸</em> Enjoy <em>▸</em> Reflect <em>▸</em></span>

    </div>
  </Marquee>
);
  const four = (
    <>
      {/* <p>
        <b>Glad to e-meet you!</b>
      </p> */}

      <p className="iam-line"> 
        ↑ I AM guided by my practical yet idealistic approach to engineering; 
        And I obtained my Master's degree in Complex Adaptive Systems from{' '}
        <a href="https://www.chalmers.se/">Chalmers University of Technology</a>.
      </p>

      <p>
        My research interests focus on human-centered perception and motion modelling 
        in traffic and autonomous systems. I am currently exploring 
        interactive and data-driven approaches to understanding system dynamics shaped by motion and interaction.
      </p>
    </>
  );
  // const five = (
  //   <a
  //     className="email-link"
  //     href=""
  //     target="_blank"
  //     rel="noreferrer">
  //     View CV!
  //   </a>
  // );
  const five = (
  <a
    className="email-link"
    href="/myresume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    View CV!
  </a>
);


  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
