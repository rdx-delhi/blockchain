var LoyaltyToken = artifacts.require("./LoyaltyToken.sol");
var LoyaltyTokenSale = artifacts.require("./LoyaltyTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(LoyaltyToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(LoyaltyTokenSale, LoyaltyToken.address, tokenPrice);
  });
};
