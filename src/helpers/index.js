import { ethers } from "ethers"

const { ethereum } = window

// Helper to return contract adrress
export const getContract = (address, abi) => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const contractAddress = new ethers.Contract(address, abi, signer,)
    return contractAddress
}