import styled from 'styled-components';

export const A = styled.a`
  color: var(--primary-color);
`;
export const BioStyleWrapper = styled.section`
  line-height: 180%;
  /* Targeting the articles inside this BioStyleWrapper section */
  & article {
    margin-bottom: 25px;
  }
`;
