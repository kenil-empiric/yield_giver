import { IoCopy } from "react-icons/io5";
import { memo, useState } from "react";
function CopyAddress({ copyIcon, setCopyIcon, userAddress }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = (event) => {
    event.stopPropagation();
    navigator?.clipboard?.writeText(userAddress);
    setCopyIcon({ icon: IoCopy });
    setCopied(!copied);
  };

  return (
    <copyIcon.icon
      className={`cursor-pointer ${copied ? "text-green-400" : ""}`}
      onClick={(event) => handleCopy(event)}
    />
  );
}

export default memo(CopyAddress);
