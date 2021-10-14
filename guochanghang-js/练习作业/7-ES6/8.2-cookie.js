const set = (name, value, { maxAge, domain, path, secure } = {}) => {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if (typeof maxAge === "number") {
        cookieText += `;max-age=${maxAge}`;
    }
    if (domain) {
        cookieText += `; domain = ${domain}`;
    }
    if (path) {
        cookieText += `;path=${path}`;
    }
    if (secure) {
        cookieText += `;secure`;
    }
    document.cookie = cookieText;
}


const get = name => {
    name = `${encodeURIComponent(name)}`;    //若键是汉字,进行转码
    // console.log(name);
    const cookies = document.cookie.split('; ');
    // console.log(cookies);                 //得到键值对组成的数组
    for (const item of cookies) {
        const [cookieName, cookieValue] = item.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return;
}


const remove = (name, { domaim, path } = {}) => {
    set(name, '', { domaim, path, maxAge: -1 });
};

export { set, get, remove }