const ConnectWithGoogle = () => {
  return (
    <button className="w-10/12 mx-auto mt-4 flex items-center px-4 h-12 rounded-lg border-2 border-[#FA5D5D] hover:bg-[#FA5D5D] group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <g>
          <rect width="24" height="24" fill="none"></rect>
          <path
            d="M261.529,3012.3a5.143,5.143,0,0,1,3.551,1.34l2.592-2.481a8.919,8.919,0,0,0-6.143-2.339,9.2,9.2,0,0,0-8.2,4.959l2.969,2.26a5.54,5.54,0,0,1,5.231-3.739"
            transform="translate(-249.345 -3005.818)"
            fill="#ff3e3e"
            fillRule="evenodd"
          ></path>
          <path
            d="M270.345,3018.018a7.545,7.545,0,0,0-.194-1.84h-8.622v3.34h5.061a4.388,4.388,0,0,1-1.878,2.92l2.9,2.2a8.712,8.712,0,0,0,2.733-6.62"
            transform="translate(-249.345 -3005.818)"
            fill="#3b8aff"
            fill-rule="evenodd"
          ></path>
          <path
            d="M256.3,3019.6a5.423,5.423,0,0,1-.306-1.78,5.712,5.712,0,0,1,.3-1.781l-2.969-2.259a8.817,8.817,0,0,0,0,8.08Z"
            transform="translate(-249.345 -3005.818)"
            fill="#ffce12"
            fill-rule="evenodd"
          ></path>
          <path
            d="M261.529,3026.818a8.858,8.858,0,0,0,6.081-2.18l-2.9-2.2a5.677,5.677,0,0,1-8.408-2.84l-2.969,2.26a9.182,9.182,0,0,0,8.2,4.96"
            transform="translate(-249.345 -3005.818)"
            fill="#27b648"
            fillRule="evenodd"
          ></path>
        </g>
      </svg>
      <span className="w-full text-center text-sm font-semibold tracking-wide text-[#FA5D5D] group-hover:text-white">
        Connect with Google
      </span>
    </button>
  );
};
export default ConnectWithGoogle;
