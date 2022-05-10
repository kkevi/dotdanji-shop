import React, { useMemo } from 'react';

export const useVerfiyPhone = (phone: string) => {
	return useMemo(() => {
		const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
		const validPhone = regPhone.test(phone);

		return validPhone;
	}, [phone]);
};

export const useVerfiyEmail = (email: string) => {
	return useMemo(() => {
		const regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
		const validEmail = regEmail.test(email);

		return validEmail;
	}, [email]);
};

export const useVerfiyUrl = (url: string) => {
	return useMemo(() => {
		const regUrl =
			/^(http\:\/\/)?((\w+)[.])+(asia|biz|cc|cn|com|de|eu|in|info|jobs|jp|kr|mobi|mx|name|net|nz|org|travel|tv|tw|uk|us)(\/(\w*))*$/i;
		const validUrl = regUrl.test(url);

		return validUrl;
	}, [url]);
};
