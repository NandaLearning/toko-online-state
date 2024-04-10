const Toaster = () => {
  return (
    <div className="w-80 top-0 fixed mt-10 bg-blue-400 h-16 rounded-xl">
      <div className=" p-4 flex">
        <img src="done.svg" className=" w-8" alt="" />
        <h1 className=" text-white text-lg font-bold">Berhasil masuk ke keranjang</h1>

      </div>
    </div>
  )
}

export default Toaster
