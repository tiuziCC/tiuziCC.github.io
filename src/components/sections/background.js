import React, { useState } from 'react';
import styled from 'styled-components';

import ExperienceTimeline from './experiencetl';
import EducationTimeline from './educationtl';
import ServicesTimeline from './servicestl';


const StyledBackground = styled.section`
  max-width: 900px;

  .inner {
    display: flex;
    gap: 50px;

    // add
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 30px;
    }
  }
`;

const Sidebar = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 160px;

  // add
  @media (max-width: 768px) {
    display: flex;
    gap: 16px;
    min-width: unset;
  }
`;

const SidebarItem = styled.button`
  ${({ theme }) => theme.mixins.link};
  width: 100%;
  padding: 10px 14px;
  text-align: left;
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  color: ${({ active }) => (active ? 'var(--pink)' : 'var(--slate)')};
  background-color: ${({ active }) => (active ? 'var(--lightest-navy)' : 'transparent')};
  border-left: 2px solid ${({ active }) => (active ? 'var(--pink)' : 'transparent')};

  &:hover {
    background-color: var(--light-navy);
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Background = () => {
    const [active, setActive] = useState('Experience');
    // const [active, setActive] = useState('Education');

  return (
    <StyledBackground id="background">
      <h2 className="numbered-heading">My Background</h2>

      <div className="inner">
        <Sidebar>
          {['Experience', 'Education', 'Community'].map(key => (
            <li key={key}>
              <SidebarItem
                active={active === key}
                onClick={() => setActive(key)}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </SidebarItem>
            </li>
          ))}
        </Sidebar>

        <Content>
          {active === 'Experience' && <ExperienceTimeline />}
          {active === 'Education' && <EducationTimeline />}
          {active === 'Community' && <ServicesTimeline />}
        </Content>
      </div>
    </StyledBackground>
  );
};

export default Background;
