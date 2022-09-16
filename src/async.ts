function samplePromiseTop(): Promise<string> {
    return Promise.resolve("Joy");
}

samplePromiseTop().then((value) => console.info(value));
