// import { Wallet  } from 'ethereumjs-wallet'
let Wallet = require('ethereumjs-wallet');

let ethWallet = Wallet.generate();
console.log(`Your new ETH address: ${ethWallet.getAddressString()}`);
console.log(`Caution! Store in a safe place! Your privateKey : ${ethWallet.getPrivateKeyString()}` );