import { useState } from 'react';
import { ButtonClasses, InputClasses, SvgClasses } from 'types/enums/classes';
import { SvgId } from 'types/enums/svg';
import { InputText, TextButton } from 'types/enums/text';
import { SearchProps } from 'types/types/props';
import { Button } from '../button/Button';
import { Wrapper } from '../component-wrapper/Wrapper';
import { Input } from '../input/Input';
import { Svg } from '../svg-element/Svg';

export const Search = ({ funcSearch }: SearchProps) => {
  const [value, setValue] = useState('');
  const handleClick = () => funcSearch(value);
  return (
    <Wrapper>
      <Input
        type='text'
        className={InputClasses.SEARCH}
        placeholder={InputText.PLACEHOLDER_SEARCH}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        data-elem='search-input'
      />
      <Button onClick={handleClick} className={ButtonClasses.BTN_SEARCH} dataElem='search-button'>
        <span>{TextButton.SEARCH}</span>
      </Button>
      <Svg className={SvgClasses.SEARCH} id={SvgId.SEARCH} />
    </Wrapper>
  );
};
