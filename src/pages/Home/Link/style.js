import styled from 'styled-components';

import { h4_400, h4_600 } from '@/styles/commonStyle/localTextStyle';

export const Wrapper = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  height: 197px;
  width: 1128px;
  margin-top: 53px;
  border-radius: 8px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding-left: 48px;

  > h3 {
    color: ${(props) => props.theme.colors.gray[10]};
    ${h4_400}
    letter-spacing: 0px;
  }
`;

export const LowerBox = styled.div``;

export const Title = styled.span`
  color: ${(props) => props.theme.colors.gray[10]};
  ${h4_400}
  letter-spacing: 0px;
`;
export const Goto = styled.div`
  margin-top: 11px;
  color: ${(props) => props.theme.colors.white};
  ${h4_600}
  display: flex;
  align-items: center;

  > div {
    display: flex;
    margin-left: 9px;
    background-color: rgba(256, 256, 256, 0.5);
    width: 30px;
    height: 30px;
    padding: 3px;
    border-radius: 4px;
  }
`;

export const ArrowIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 9px;
  background-color: ${(props) => props.theme.colors.white};
  opacity: 0.45;
  width: 30px;
  height: 30px;
  border-radius: 4px;
`;

export const ArrowIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const LinkIcon = styled.img`
  width: 106px;
  height: 106px;
  margin-left: 20px;
  cursor: pointer;
`;

export const RightWrapper = styled.div`
  margin-right: 48px;
  margin-left: 20px;

  > img {
    width: 106px;
    height: 106px;
    margin-left: 20px;
    cursor: pointer;
  }
`;
