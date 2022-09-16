export const sayHelloAsync = (name: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name) {
                resolve(`Hello ${name}`);
            } else {
                reject("Name is empty");
            }
        }, 1000);
    });
};

export const getBalance = async (name: string, from: () => void) => {
    const balance = await from();
    return {
        name: name,
        balance: balance
    };
};
