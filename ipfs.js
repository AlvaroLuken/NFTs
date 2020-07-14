const ipfsApi = require("ipfs-http-client");

const ipfs = ipfsApi("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "Alvaro's Sword",
      cryptoDefense: 30,
      image: "https://gateway.ipfs.io/ipfs/QmdetuV7LkA5xcJM6FcKVCmASwyS3dcizxkUELSkB763z1",
      description: "Slays Nazis in one quick stroke. Also fascists."
    })
  }];

  for await (const result of ipfs.add(files, { pin: true })) {
    console.log(result.cid.toString())
  }
}

run();