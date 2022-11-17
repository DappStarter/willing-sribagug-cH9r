require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note soccer essay give arctic tail solid'; 
let testAccounts = [
"0xfd00101d374cc39ee80532daf4c6e7c7165ccd8877161f5a14899ba7fe572a31",
"0x76c9b39717bf5124a27631f1fc384fe396d85546ead01e79e07edfabf561d6b5",
"0x9e9a0e0e27452dd04fd4e3e3b699911b725959692cb59283133b46e4ed625838",
"0xa7fe21ce217ced2ee843c6fc4527182ea5a4cd934b9b60a973bc2575066100b7",
"0x5c5bbd4800bb15dc242161287f7c9e61f99aae49ea14d4f25a4e8de4d247b3af",
"0x6048e84b44a995d0ef57584f6d11bf9e82e30c76d9d9e9ea99bf7cb176d85e4a",
"0x2e4a7d40218f1dbd6e285cac2a9ba5a49d8c9319a1c9e04e51207e25fbdff030",
"0x33d41ec369a3752ba2fca409acb495a34c4c9b4ca098abf323fb6feec1f44cbf",
"0xfaf4d20dee5b90d87bafbf735ee7a8b5f374b2c1ada7d5ed7c7ade27b2c31d01",
"0xed2d162acae0c5240ca091799f20e98e74936e12e8a72fcc0f49cd88056134f8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

