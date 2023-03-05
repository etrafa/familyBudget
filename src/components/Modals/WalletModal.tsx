import WalletIcon from "../../assets/categories/icon_896.png";

interface WalletModalProps {
  setIsWalletModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WalletModal = ({ setIsWalletModalOpen }: WalletModalProps) => {
  return (
    <div className="w-full ml-auto fixed min-h-screen top-0 bg-black bg-opacity-50 z-50">
      <div className="absolute bg-white rounded-md shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-xl">
        <div className="mt-4 w-full flex items-center px-12">
          <span
            onClick={() => setIsWalletModalOpen(false)}
            className="w-6 text-xl font-semibold hover:text-gray-500 cursor-pointer"
          >
            X
          </span>
          <h2 className="ml-8 text-lg font-semibold tracking-wider">
            Select Wallet
          </h2>
        </div>
        <div className="w-full h-96 overflow-y-scroll mt-4">
          <div className="flex items-center px-12 py-4 cursor-pointer bg-gray-100 hover:bg-[#E0F3E4]">
            <img className="w-10 h-10" src={WalletIcon} alt="wallet " />
            <div>
              <span className="text-sm pl-4 font-bold tracking-wide">
                Etem Senel
              </span>
              <p className="text-sm pl-4 text-gray-500 tracking-wide">$1200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WalletModal;
