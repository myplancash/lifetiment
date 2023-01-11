import styled from 'styled-components';
// import Container from '../Container/Container';

export const HeaderStyles = styled.header`
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  font-size: 1.2em;
  color: #CBD2FF;
  padding: 1em 0;
  position: sticky;
  background-color: #04072D;
  top: 0;
  z-index: 20;
`

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 0 1em;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 720px) {
    flex-wrap: wrap
  }
`

export const HeaderTitle = styled.p`
  display: flex;
  align-items: center;
  flex-grow: 1;
  font-size: 1.3em;
  font-weight: 700;
  margin-left: .2em;

  @media (max-width: 720px) {
    order: 1;
    width: 50%;
    height: 1.5em;
    margin-bottom: .2em;
  }
`

export const HeaderLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 2em;

  @media (max-width: 720px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    order: 3;
    margin: 0;
  }

  li {
    display: flex;
    gap: 1.5rem;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    color: #CBD2FF;
    padding-right: .8rem; 
    margin: 0 .8rem;
    cursor: pointer;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-left: 0.8rem;
    }

  }
  
  a {
    color: #CBD2FF;
    text-decoration: hidden;
    transition: text-decoration .5s;
  }
  
    a:hover {
      text-decoration: underline wavy #F27168;
    }
`
