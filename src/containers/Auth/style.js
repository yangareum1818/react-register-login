import styled from "styled-components";

export const Label = styled.label`
  position: relative;
  margin-bottom: 30px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const LabelText = styled.span`
  display: inline-block;
  color: #555;
  font-size: 16px;
  font-weight: 500;
`;

export const CheckLabel = styled.label`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10px;
  width: max-content;
  cursor: pointer;
`;

export const InputStyle = styled.input`
  padding: 4px 8px;
  margin-top: 4px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  color: #555;
  border: 1px solid #555;
  border-radius: 4px;

  &::placeholder {
    font-size: 14px;
    color: #555;
  }
`;

export const CheckBoxStyle = styled.input`
  width: 14px;
  height: 14px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  background-color: #fff;
  vertical-align: middle;
`;

export const ErrMsg = styled.span`
  display: block;
  position: absolute;
  bottom: -20px;
  left: 8px;
  color: #f00;
  font-size: 12px;
`;

export const LinkWrapping = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  & > * {
    color: #000;
    font-size: 14px;
    text-decoration: none;
  }
`;

export const Form = styled.form``;
