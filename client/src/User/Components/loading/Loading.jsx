
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex gap-4">
        <div className="caesar-dressing-regular">
            {/* <h1 className="black-and font-bold text-2xl text-[#944E63]">pharmacie</h1> */}
            <h1 className="text-2xl animate-pulse text-[#B47B84]">FABPHARM</h1>
            </div>
        <div className="animate-spin rounded-full border-t-4 border-pink-900 border-opacity-50 h-12 w-12"></div>
        </div>
    </div>

  );
};

export default Loading;