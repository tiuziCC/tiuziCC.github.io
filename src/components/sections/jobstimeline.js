import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';

const StyledJobsSection = styled.section`
  max-width: 700px;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  column-gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 24px 1fr;
    column-gap: 15px;
  }
`;

const Marker = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  background-color: var(--green);
  border-radius: 50%;
  margin-top: 6px;
  z-index: 1;
`;

const Line = styled.span`
  position: absolute;
  top: 22px;
  width: 2px;
  height: calc(100% + 28px);
  background-color: var(--lightest-navy);
`;

const Content = styled.div`
  h3 {
    margin-bottom: 4px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 16px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }
`;

const JobsTimeline = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              range
              url
            }
            html
          }
        }
      }
    }
  `);

  const jobsData = data.jobs.edges;
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledJobsSection id="jobs" ref={revealContainer}>
      <h2 className="numbered-heading">My background</h2>

      <Timeline>
        {jobsData.map(({ node }, i) => {
          const { frontmatter, html } = node;
          const { title, company, range, url } = frontmatter;
          const isLast = i === jobsData.length - 1;

          return (
            <TimelineItem key={i}>
              <Marker>
                <Dot />
                {!isLast && <Line />}
              </Marker>

              <Content>
                <h3>
                  {title}{' '}
                  <span className="company">
                    @ <a href={url} className="inline-link">{company}</a>
                  </span>
                </h3>

                <p className="range">{range}</p>

                <div dangerouslySetInnerHTML={{ __html: html }} />
              </Content>
            </TimelineItem>
          );
        })}
      </Timeline>
    </StyledJobsSection>
  );
};

export default JobsTimeline;
