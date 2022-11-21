const ethers = require("ethers");
const network = process.env.REACT_APP_INFURA_NETWORK || "mainnet";

const provider = new ethers.providers.InfuraProvider(
  network,
  process.env.REACT_APP_INFURA_API_KEY
);

export const isValidAddress = (address) => ethers.utils.isAddress(address);

export const getBalance = async (address) => {
  return provider
    .getBalance(address)
    .then((balance) => ethers.utils.formatEther(balance))
    .catch((error) => console.log(error));
};

export const getTransactionCost = async (unit) => {
  return await provider.getFeeData();
};

const transformTransactionResponse = (response) => {
  let { from, to, maxFeePerGas, gasLimit, hash, maxPriorityFeePerGas, value } =
    response;
  maxFeePerGas = ethers.utils.formatUnits(maxFeePerGas, "gwei");
  maxPriorityFeePerGas = ethers.utils.formatUnits(maxPriorityFeePerGas, "gwei");
  value = ethers.utils.formatUnits(value, "gwei");
  gasLimit = ethers.utils.formatUnits(gasLimit, "wei");

  return {
    from,
    to,
    maxFeePerGas,
    hash,
    maxPriorityFeePerGas,
    value,
    gasLimit,
  };
};

export const sendTransaction = async (amountInEther, receiverAddress) => {
  const senderPrivateKey = process.env.REACT_APP_SENDER_PRIVATE_KEY;
  let wallet = new ethers.Wallet(senderPrivateKey, provider);

  let tx = {
    to: receiverAddress,
    value: ethers.utils.parseEther(amountInEther),
  };

  return wallet
    .sendTransaction(tx)
    .then((response) => transformTransactionResponse(response))
    .catch(({ error }) => JSON.parse(error.body));
};
