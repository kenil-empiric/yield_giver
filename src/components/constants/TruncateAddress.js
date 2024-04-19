function TruncateAddress(address) {
  const FirstFourCharacter = address?.substring(0, 5);
  const LastFourCharacter = address?.substring(address.length - 5);
  const MiddleCharacter = "......";
  return `${FirstFourCharacter}${MiddleCharacter}${LastFourCharacter}`;
}

export default TruncateAddress;
