import * as httpsRequest from '~/utils/httpsRequest';

export const getSuggested = async ({ page, perPage }) => {
    try {
        const res = await httpsRequest.get(`users/suggested`, {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
