require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note praise coconut harvest nasty flip giggle'; 
let testAccounts = [
"0xf2dc56a6028a743f3cb00019f77ed33b76dabdbb848d23c6e88f6de2727ce77f",
"0xd73fe97019cd4829379212bafab3b021385a53489e2fc8f88ee039d05b8960d2",
"0x8b141db50447d73f6418b61c8783995dabccfe4b2a15a4ab4e2576631aa868a2",
"0xca88f4d889aae305b2c819ca09a29f93c4f6062ab212fdce0a2f0dfc8285ff88",
"0xafd6d48fe54607b79e28bb42926b3f5a3d21992d6f97d3c779ed594904e9eb66",
"0xcdaad687591952151ebe6bf068388597eda6ae0020d9858962637314f814caa2",
"0x2adc6424545201b68e0e98eced86ca24abc28761cbcdae6f3cbd447421606070",
"0x6d54c560e54b55786e568e07e25709b5e3f858f2835ccb99a7582b254437697b",
"0x7e21d47fcc9be8e64c7139babfe0459052534ab4165df0686eb01d03cf264a5e",
"0xa7d7d0fa4d7257ed3f894b5441f1bbccd46a5f6c1da36b33ff022bcaeee33c8f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

