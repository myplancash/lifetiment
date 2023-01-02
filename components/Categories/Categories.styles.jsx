import styled from 'styled-components';

export const CategoriesStyles = styled.div`
  background-color: #ebebeb;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-radius: 0.5rem; /* 8px */
  padding: 2rem;
  margin-bottom: 2rem;
`
export const CategorySpan = styled.span`
  cursor: pointer;
  display: block;
  padding-bottom: 1em;
  margin-bottom: 1em;
  text-decoration: hidden;
  transition: text-decoration .5s;
  &:hover {
    text-decoration: underline wavy #F27168;
  }
`