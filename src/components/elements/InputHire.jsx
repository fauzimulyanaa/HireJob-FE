export default function HireInput() {
  return (
    <>
      <div className="container-form max-w-md mx-auto py-8 px-4">
        <div className="text-start">
          <h1 className="text-3xl my-5">Hubungi Lous Tomlinson</h1>
          <p className="my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
        </div>
        <form>
          <div className="container-form w-[550px]">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-[16px]  font-medium text-gray-600"
              >
                Untuk Posisi
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="text-[14px] mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Fulltime Front-end Web Developer"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-[16px] font-medium text-gray-600"
              >
                Deskripsi
              </label>
              <textarea
                name="deskripsi"
                id=""
                cols="30"
                rows="10"
                className="border w-full rounded-md focus:outline-none focus:ring focus:border-blue-300 p-4 text-[14px]"
                placeholder="Membuat fitur dan maintenance untuk dashrboard admin dan posisi remote"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#FBB017] text-white py-2 px-4 rounded-md hover:bg=[#FBB017] focus:outline-none focus:ring focus:border-blue-300"
              >
                Hire
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
