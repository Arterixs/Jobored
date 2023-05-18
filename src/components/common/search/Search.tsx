import { ButtonClasses, InputClasses, SvgClasses } from 'types/enums/classes';
import { SvgId } from 'types/enums/svg';
import { InputText, TextButton } from 'types/enums/text';
import { Button } from '../button/Button';
import { Wrapper } from '../component-wrapper/Wrapper';
import { Input } from '../input/Input';
import { Svg } from '../svg-element/Svg';

export const Search = () => (
  <Wrapper>
    <Input type='text' className={InputClasses.SEARCH} placeholder={InputText.PLACEHOLDER_SEARCH} />
    <Button onClick={() => {}} className={ButtonClasses.BTN_SEARCH}>
      <span>{TextButton.SEARCH}</span>
    </Button>
    <Svg className={SvgClasses.SEARCH} id={SvgId.SEARCH} />
  </Wrapper>
);
