import * as httpsRequest from '~/utils/httpsRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpsRequest.get(`users/search`, {
            params: {
                q,
                type: 'less',
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
