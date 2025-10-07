export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="flex items-center justify-center py-[5rem]">
        <div className="animate-spin rounded-full h-[3rem] w-[3rem] border-b-2 border-white"></div>
      </div>
    </div>
  );
}
