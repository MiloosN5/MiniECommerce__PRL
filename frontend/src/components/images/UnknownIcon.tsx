export const UnknownIcon = ({ color }: { color: string }) => {
  return (
    <svg
      className="image--unknownIcon"
      width="128"
      height="128"
      viewBox="0 0 128 128"
    >
      <path
        fill="transparent"
        stroke={color}
        strokeWidth="6"
        d="M76 27V41C76 42.6569 77.3431 44 79 44H93"
      ></path>
      <path
        fill={color}
        d="M66 82.5C66 83.8807 64.8807 85 63.5 85C62.1193 85 61 83.8807 61 82.5C61 81.1193 62.1193 80 63.5 80C64.8807 80 66 81.1193 66 82.5Z"
      ></path>
      <path
        fill="transparent"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="6"
        d="M57 62.5854C57 58.9484 59.9101 56 63.5 56C67.0899 56 70 58.9484 70 62.5854C70 64.8085 68.9126 66.7744 67.2474 67.9668C65.4512 69.253 63.5 70.9616 63.5 73.1707V74"
      ></path>
    </svg>
  );
};
