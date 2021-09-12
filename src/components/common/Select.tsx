import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;
  background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
  border-radius: 4px;

  button {
    border: 0;
    margin: 0;
    background: transparent;
    cursor: pointer;
  }

  button.placeholder {
    width: 100%;
    font-size: 14px;
    padding: 4px 10px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.75);
    text-align: left;
  }

  .options-wrapper {
    position: absolute;
    width: 100%;
    margin-top: 2px;

    .options {
      height: 0;
      width: auto;
      max-height: 0;
      overflow: hidden;
      overflow-y: scroll;
      background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
      -webkit-transition: max-height 0.5s ease;
      display: flex;
      flex-flow: column;

      &.show {
        height: auto;
        max-height: 200px;
        -webkit-transition: max-height 0.5s ease;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
        border: 0;
        border-radius: 4px;
      }

      .option-item {
        padding: 8px;
        display: flex;
        font-weight: 500;
        font-size: 12px;
        padding: 6px 18px;
        color: rgba(0, 0, 0, 0.75);

        &:hover {
          background: #78d3db;
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
    <SelectWrapper className="select-component" ref={wrapperRef}>
      <button className="placeholder" onClick={() => setOptionsVisible(true)}>
        {selected || placeholder}
      </button>
      <div className="options-wrapper">
        <div className={`options ${optionsVisible && 'show'}`}>
          {options.map((option) => (
            <button
              className="option-item"
              key={`${option.value}`}
              onClick={() => {
                setOptionsVisible(false);

                onChange(option);
                setSelected(option.name);
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
