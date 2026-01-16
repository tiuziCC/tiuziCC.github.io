import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';

const StyledServicesSection = styled.div`
  max-width: 700px;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 30px;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  column-gap: 20px;
  margin-bottom: 40px;
`;

const Marker = styled.div`
  position: relative;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  background-color: var(--slate);
  border-radius: 50%;
  display: block;
  margin-top: 6px;
`;

const Line = styled.span`
  position: absolute;
  top: 14px;
  left: 3px;
  width: 2px;
  height: calc(100% + 26px);
  background-color: var(--lightest-navy);
`;

const Content = styled.div`
  h3 {
    margin-bottom: 4px;
    font-size: var(--fz-lg);
    font-weight: 500;

    .org {
      color: var(--pink);
    }
  }

  .range {
    margin-bottom: 8px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  li {
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    color: var(--light-slate);
  }
`;

const ServicesTimeline = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const data = useStaticQuery(graphql`
    query {
      services: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/services/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              role
              organization
              range
              url
            }
            html
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (prefersReducedMotion) return;
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const items = data.services.edges;

  return (
    <StyledServicesSection ref={revealContainer}>
      <h3>Community Involvement</h3>

      <Timeline>
        {items.map(({ node }, i) => {
          const isLast = i === items.length - 1;
          const { role, organization, range, url } = node.frontmatter;

          return (
            <Item key={i}>
              <Marker>
                <Dot />
                {!isLast && <Line />}
              </Marker>

              <Content>
                <h3>
                  {role}{' '}
                  <span className="org">
                    @{' '}
                    {url ? (
                      <a href={url} className="inline-link">
                        {organization}
                      </a>
                    ) : (
                      organization
                    )}
                  </span>
                </h3>

                <div className="range">{range}</div>

                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              </Content>
            </Item>
          );
        })}
      </Timeline>
    </StyledServicesSection>
  );
};

export default ServicesTimeline;
