import PropTypes from "prop-types";
import React, { HTMLProps } from "react";

import CheckableInput from "../CheckableInput";

type Props = {
  label: string;
} & HTMLProps<HTMLInputElement>;

const RadioInput = ({ label, ...radioProps }: Props): JSX.Element => {
  return (
    <CheckableInput
      inputType="radio"
      label={label}
      {...radioProps}
    ></CheckableInput>
  );
};

RadioInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default RadioInput;
