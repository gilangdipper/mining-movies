import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { Check as CheckIcon } from '@styled-icons/fa-solid/Check';

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
        align-items: center;

        &.active {
          background-image: linear-gradient(
            60deg,
            #3d3393 0%,
            #2b76b9 37%,
            #2cacd1 65%,
            #35eb93 100%
          );
          color: rgba(255, 255, 255, 0.75);
          font-weight: bold;
          padding-left: 0;
        }

        &:hover {
          background: #78d3db;
        }

        svg {
          width: 10px;
          margin: 0 4px;
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
  onChange: (optionValue: TOptions) => void;
  options: TOptions[];
  placeholder: string;
  value: string;
}

const Select: FC<ISelect> = ({ options, placeholder, onChange, value }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [optionsVisible, setOptionsVisible] = useState<boolean>(false);
  const optionActive = useMemo(
    () => options.filter((option) => option.value === value)[0],
    [value],
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef && wrapperRef.current) {
      if (
        event.target instanceof Node &&
        !wrapperRef.current.contains(event.target)
      ) {
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
        {optionActive?.name || placeholder}
      </button>
      <div className="options-wrapper">
        <div className={`options ${optionsVisible && 'show'}`}>
          {options.map((option) => (
            <button
              className={`option-item ${
                option.value === optionActive?.value && 'active'
              }`}
              key={`${option.value}`}
              onClick={() => {
                setOptionsVisible(false);
                onChange(option);
              }}
            >
              {option.value === optionActive?.value && <CheckIcon />}
              {option.name}
            </button>
          ))}
        </div>
      </div>
    </SelectWrapper>
  );
};

export default Select;
