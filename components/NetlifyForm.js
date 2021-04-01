import styled from "styled-components";
const mainFont = '"Fira Code", monospace;';

const Form = styled.form`
  width: 70%;

  @media (max-width: 1227px) {
    width: 30rem;
    margin: 3rem;
  }

  @media (max-width: 550px) {
    width: 30rem;
    margin: 0;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: ${mainFont};
  font-weight: 500;
  font-size: 16px;
  padding: 10px;

  input {
    height: 35px;
    margin-top: 10px;
    padding-left: 15px;
    font-size: 13pt;
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

  textarea {
    padding: 10px;
    font-family: ${mainFont};
    font-size: 12pt;
    height: 200px;
    margin-top: 10px;
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
    margin: 5px 10px;
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

    &:checked {
      --b: var(--active);
      --bc: var(--active);
    }

    &:hover {
      &:not(:checked) {
        &:not(:disabled) {
          --bc: var(--border-hover);
        }
      }
    }

    &:not(.switch) {
      width: 21px;
      &:after {
        opacity: var(--o, 0);
      }
      &:checked {
        --o: 1;
      }
    }
  }

  input {
    &:not(.switch) {
      border-radius: 4px;
      &:after {
        width: 5px;
        height: 9px;
        border: 2px solid var(--active-inner);
        border-top: 0;
        border-left: 0;
        left: 7px;
        top: 4px;
        transform: rotate(var(--r, 43deg));
      }
    }

    &.switch {
      width: 38px;
      border-radius: 11px;
      &:after {
        left: 2px;
        top: 2px;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background: var(--ab, var(--border));
        transform: translateX(var(--x, 0));
      }

      &:checked {
        --ab: var(--active-inner);
        --x: 17px;
      }

      &:disabled {
        &:not(:checked) {
          &:after {
            opacity: 0.6;
          }
        }
      }
    }
  }

  button {
    margin: 5px 10px 10px auto;
    font-family: ${mainFont};
    font-weight: 500;
    background-color: #0a0a0a;
    border: none;
    color: white;
    border-radius: 3px;
    width: 80px;
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

const FormMessage = styled.p`
  font-family: ${mainFont};
  font-size: 11pt;
  padding: 10px;
`;

export default function NetlifyForm() {
  return (
    <Form name="contact" method="POST" data-netlify="true" action="/contact">
      <input type="hidden" name="form-name" value="contact" />
      <FormMessage>
        Get in touch for commissions or to say hello. I’m happy to answer any
        questions.
      </FormMessage>
      <Label>
        Name
        <input type="text" name="name" />
      </Label>

      <Label>
        Email
        <input type="email" name="email" />
      </Label>

      <Label>
        Message<textarea name="message"></textarea>
      </Label>

      <Controls>
        <input type="checkbox" name="checkbox" />
        <div>
          Sign me up for the <br /> occasional newsletter
        </div>
        <button type="submit">Send</button>
      </Controls>
    </Form>
  );
}
