import styled from "styled-components";
const mainFont = '"Fira Code", monospace;';

const Form = styled.form`
  width: 40rem;
  @media (max-width: 825px) {
    width: 100%;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: ${mainFont};
  font-weight: 500;
  font-size: 16px;
  margin-top: 15px;
  text-align: center;

  input {
    height: 35px;
    margin-top: 15px;
    padding-left: 15px;
    font-size: 12pt;
    font-family: ${mainFont};
    font-weight: 500;
    border: 1px solid black;
    border-radius: 3px;
    &::-moz-selection {
      background-color: #1e1e1e;
      color: white;
    }
    &::selection {
      background-color: #1e1e1e;
      color: white;
    }

    &:focus {
      outline: 0;
      background-color: #f9f9f9;
    }
  }
`;

const Controls = styled.div`
  display: flex;
  font-family: ${mainFont};
  font-size: 10pt;

  * {
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }

  input {
    --active: #0a0a0a;
    --active-inner: #fff;
    --border: #535353;
    --border-hover: #929292;
    --background: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 21px;
    outline: none;
    display: inline-block;
    position: relative;
    cursor: pointer;
    border: 1px solid var(--bc, var(--border));
    background: var(--b, var(--background));
    transition: background 0.1s, border-color 0.1s;
    &:after {
      content: "";
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform var(--d-t, 0.2s) var(--d-t-e, ease),
        opacity var(--d-o, 0.1s);
    }
  }

  button {
    margin-left: auto;
    margin-top: 10px;
    font-family: ${mainFont};
    font-weight: 500;
    background-color: #0a0a0a;
    border: none;
    color: white;
    border-radius: 3px;
    width: inherit;
    height: 25px;

    &:hover {
      cursor: pointer;
      border: 1px solid black;
      background-color: white;
      color: #1e1e1e;
      transition: 0.1s;
    }
  }
`;

export default function NetlifySmallForm() {
  return (
    <Form name="signup" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="signup" />
      <Label>
        Let's keep in touch. Sign up for my (occasional) newsletter here.
        <input type="email" name="email" placeholder="Email Address" />
      </Label>
      <Controls>
        <button type="submit">Sign me up</button>
      </Controls>
    </Form>
  );
}
