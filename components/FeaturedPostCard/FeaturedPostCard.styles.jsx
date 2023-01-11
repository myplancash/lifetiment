import styled from 'styled-components';

export const FeaturedPostStyles = styled.div`
  height: 18rem;
  position: relative;

  @media (max-width: 720px) {
    margin-bottom: 4em;
  }
`

export const FeaturedPostContainer = styled.div`
  display: flex;

  @media (max-width: 720px) {
    flex-direction: column;
  }

`