export const fakeToken = () => {
    let text = "";
    const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 10; i++)
        text += string.charAt(Math.floor(Math.random() * string.length));
    return text;
}