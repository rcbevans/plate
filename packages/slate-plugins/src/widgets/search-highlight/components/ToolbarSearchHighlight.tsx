import React from 'react';
import styled from 'styled-components';
import { HeadingToolbar } from 'components/Toolbar/HeadingToolbar/HeadingToolbar';

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  box-sizing: border-box;
  font-size: 0.85em;
  width: 100%;
  padding: 0.5em;
  padding-left: 2em;
  border: 2px solid #ddd;
  background: #fafafa;

  :focus {
    outline: 0;
    border-color: blue;
  }
`;

interface Props {
  icon: any;
  setSearch: any;
}

export const ToolbarSearchHighlight = ({ icon: Icon, setSearch }: Props) => (
  <HeadingToolbar styles={{ root: { height: 38 } }}>
    <Wrapper>
      <Icon
        style={{
          position: 'absolute',
          top: '0.5em',
          left: '0.5em',
          color: '#ccc',
          fontSize: '18px',
        }}
      />
      <Input
        data-testid="ToolbarSearchHighlightInput"
        type="search"
        placeholder="Search the text..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </Wrapper>
  </HeadingToolbar>
);
