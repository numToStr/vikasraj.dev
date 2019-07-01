export const setCookie = (name, value) => {
    document.cookie = `${name}=${value}; path='/'; sameSite='strict';`;
};

export const getCookie = name => {
    const regex = new RegExp(
        `(?:(?:^|.*;\\s*)${name}\\s*\\=\\s*([^;]*).*$)|^.*$`
    );

    const cookieValue = document.cookie.replace(regex, "$1");

    return cookieValue;
};
