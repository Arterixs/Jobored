import { useState } from 'react';
import { ButtonClasses, InputClasses, SvgClasses } from 'types/enums/classes';
import { SvgId } from 'types/enums/svg';
import { InputText, TextButton } from 'types/enums/text';
import { Button } from '../button/Button';
import { Wrapper } from '../component-wrapper/Wrapper';
import { Input } from '../input/Input';
import { Svg } from '../svg-element/Svg';

export const Search = ({ funcSearch }: { funcSearch: (value: string) => void }) => {
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
      />
      <Button onClick={handleClick} className={ButtonClasses.BTN_SEARCH}>
        <span>{TextButton.SEARCH}</span>
      </Button>
      <Svg className={SvgClasses.SEARCH} id={SvgId.SEARCH} />
    </Wrapper>
  );
};
