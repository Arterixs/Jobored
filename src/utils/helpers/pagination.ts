import { MagicNumbers } from 'types/enums/magic-numbers';

export const getMaxPage = (total: number) => {
  if (total === MagicNumbers.ZERO) {
    return MagicNumbers.ONE;
  }
  if (total >= MagicNumbers.DEFAULT_CARDS_API) {
    return MagicNumbers.MAX_PAGE;
  }
  return Math.ceil(total / MagicNumbers.AMOUNT_CARDS_PAGE);
};
