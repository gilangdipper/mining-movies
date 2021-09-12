import React, { FC, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const SelectWrapper = styled.div<{ optionsVisible: boolean }>`
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;
  cursor: pointer;
  background-color: #ffffff;
  .placeholder {
    font-size: 16px;
    padding: 4px 10px;
    font-weight: 500;
  }
  .options-wrapper {
    position: absolute;
    width: 100%;
    .options {
      height: 0;
      width: 100%;
      max-height: 0;
      overflow: hidden;
      overflow-y: scroll;
      background-color: #ffffff;
      -webkit-transition: max-height 0.5s ease;
      display: flex;
      flex-flow: column;
      ${(props) =>
        props.optionsVisible &&
        css`
          height: auto;
          max-height: 200px;
          -webkit-transition: max-height 0.5s ease;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
          border-style: solid;
          border-width: 0 1px 1px 1px;
          border-color: #d2d6da;
        `}
      label {
        padding: 8px;
        display: flex;
        font-weight: 500;
        font-size: 12px;
        cursor: pointer;
        input {
          margin-left: auto;
          cursor: pointer;
        }
      }
    }
  }
`;

type TOptions = {
  name: string;
  value: string;
};

interface ISelect {
  options: TOptions[];
  placeholder: string;
  onChange: (optionValue: TOptions) => void;
}

const Select: FC<ISelect> = ({ options, placeholder, onChange }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [optionsVisible, setOptionsVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');
  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef && wrapperRef.current) {
      if (event.target instanceof Node && !wrapperRef.current.contains(event.target)) {
        setOptionsVisible(false);
      }
    }
    return;
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <SelectWrapper
      className="select-component"
      optionsVisible={optionsVisible}
      onClick={() => setOptionsVisible(true)}
      ref={wrapperRef}
    >
      <div className="placeholder">{selected || placeholder}</div>
      <div className="options-wrapper">
        <div className="options">
          {options.map((option, index) => (
            <button
              key={`${index}${option.value}`}
              onClick={() => {
                onChange(option);
                setSelected(option.value);
              }}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
    </SelectWrapper>
  );
};

export default Select;
