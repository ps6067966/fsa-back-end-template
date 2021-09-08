import { getUserInfo } from '../db';

export const getUserInfoRoute = {
    method: 'get',
    path: '/api/user-info',
    handler: async (req, res) => {
        const userInfo = await getUserInfo();
        res.status(200).json(userInfo);
    },
};