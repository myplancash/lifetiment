import styled from 'styled-components';
import Container from '../Container/Container';

export const HeaderStyles = styled.header`
  width: 100%;
  font-size: 1.2em;
  color: white;
  padding: 1em 0;
  position: sticky;
  top: 0;
  z-index: 2;
`

export const HeaderContainer = styled(Container)`
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
  font-weight: $font-weight-black;
  margin: 0;

  @media (max-width: 720px) {
    order: 1;
    width: 50%;
    height: 1.5em;
    margin-bottom: .2em;
  }
`
