import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import { Button } from "./FormItems";


export enum ModalType {
    Information,
    Confirmation,
    Error,
    Success,
  }
  
export interface ModalProps {
    type?: ModalType;
    title: string | ReactElement;
    cancelText?: string;
    submitText: string;
    description: string | ReactElement;
    onCancel: () => void;
    onSubmit?: () => void;
}  

export const Overlay = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(35, 43, 56, 0.5);
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  box-sizing: border-box;
  min-width: 400px;
  max-width: 600px;

  padding: 24px;
  border: 1px solid #dae0e8;
  border-radius: 6px;
  box-shadow: 0 12px 24px 0px rgba(35, 43, 56, 0.15);
  transform: translate(-50%, -50%);

  background-color: white;

  overflow-wrap: break-word;

`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  height: 25px;
`;
const getModalColor = ({ type }:{type:ModalType}): string => {
    if (type === ModalType.Error) {
      return `#d8232a`;
    }
    if (type === ModalType.Success) {
      return `#629c44`;
    }
  
    return `#ff7800`;
  };
  
  const TitleText = styled.span<{ type: ModalType }>`
    margin-left: 10px;
  
    color: ${props => getModalColor(props)};
  
    font-family: GothamMedium;
    font-size: 18px;
    line-height: 22px;
  `;
  
  const BodyText = styled.p`
  margin: 15px 0 35px;

  max-height: 200px;
  overflow-y: auto;

  color: black;

  font-family: Gotham-Light ;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CancelButton = styled(Button)`
  border: none;
`;
const Modal: FC<ModalProps> = ({
    title,
    type = ModalType.Information,
    description,
    onCancel,
    onSubmit,
    cancelText,
    submitText,
  }) => (
    <Overlay>
      <ModalContainer aria-describedby="modelDescription" aria-labelledby="modalTitle" role="dialog">
        <Title>
          
          <TitleText id="modalTitle" type={type}>
            {title}
          </TitleText>
        </Title>
        <BodyText id="modelDescription">{description}</BodyText>
        <ButtonContainer>
          {type === ModalType.Confirmation && cancelText && (
            <CancelButton  onClick={onCancel}>{cancelText}</CancelButton>
          )}
          <Button onClick={type === ModalType.Confirmation ? onSubmit : onCancel}>{submitText}</Button>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
  
  export default Modal;
  