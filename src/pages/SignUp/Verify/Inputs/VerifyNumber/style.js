import styled from 'styled-components';
import Input from '@/components/Input';
import { defaultBorderBoxStyle, inactiveBoxStyle } from '@/styles/commonStyle';

export const Wrapper = styled.div`
	display: flex;
  flex-direction: column;
	align-items: center;
`;

export const InputBox = styled(Input)`
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  width: 335px;
  height: 46px;

  &:placeholder {
    font-size: 24px;
    font-weight: ${props => props.theme.typo.weight.regular};
    color: #9B9B9B;
  }
`;

export const SectionWrapper = styled.div`
  margin-top: 37px;
`
export const Info = styled.span`
  font-size: ${props => props.theme.typo.size.xs};
  font-weight: ${props => props.theme.typo.weight.medium};
  color: #9B9B9B;
`

export const InputWrapper = styled.form`
  ${defaultBorderBoxStyle};
  height: 48px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 350px;  
`;

export const Button = styled.button`
  ${inactiveBoxStyle};
  width: 96px;
  height: 48px;
  margin-top: 10px;
  font-size: ${props => props.theme.typo.size.xs};
  font-weight: ${props => props.theme.typo.weight.medium};  
  margin-left: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 456px;
  margin-bottom: 10px;
`

export const Completed = styled.span`
  font-size: ${props => props.theme.typo.size.xs};
  font-weight: ${props => props.theme.typo.weight.medium};
  color: ${props => props.theme.colors.primary};  
`