import styled from 'styled-components';

export const EventWrapper = styled.div`
  width: 100%;
  /* Remove below */
  background: red;
  padding: 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
