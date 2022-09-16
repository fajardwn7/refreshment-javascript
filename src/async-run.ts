function samplePromise(): Promise<string> {
  return Promise.resolve("Joy");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
