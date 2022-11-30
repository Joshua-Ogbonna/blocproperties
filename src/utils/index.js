export const scrollToTop = () => {
  return window.scrollTo(0, 0);
};
export const shortenAddress = address => `${address?.slice(0, 5)}...${address.slice(address.length - 4)}`