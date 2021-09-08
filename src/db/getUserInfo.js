import { getCurrentSharePrice } from './getCurrentSharePrice';
import { getUser } from './getUser';

export const getUserInfo = async () => {
    const currentSharePrice = await getCurrentSharePrice();
    const { cashValue, numberOfSharesOwned } = await getUser();
    const sharesValue = currentSharePrice * numberOfSharesOwned;

    return {
        cashValue,
        numberOfSharesOwned,
        sharesValue,
    };
}