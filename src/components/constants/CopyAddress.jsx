import { IoCopy } from "react-icons/io5";
import { memo, useState } from "react";
import { Tooltip } from "react-tooltip";

function CopyAddress({ copyIcon, setCopyIcon, userAddress }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = (event) => {
    event.stopPropagation();
    navigator?.clipboard?.writeText(userAddress);
    setCopyIcon({ icon: IoCopy });
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <>
      <copyIcon.icon
        className={`cursor-pointer ${copied ? "text-green-400" : ""}`}
        data-tooltip-id="my-tooltip1"
        data-tooltip-content={`${copied ? "Address Copied" : "Address"}`}
        onClick={(event) => handleCopy(event)}
      />
      <Tooltip id="my-tooltip1" />
    </>
  );
}

export default memo(CopyAddress);
