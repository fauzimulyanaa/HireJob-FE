export default function EditProfileFormWorker() {
  return (
    <section>
      <div className="form-edit-company pb-56 ">
        <div className="wrapper-form bg-white w-[700px] p-10 rounded-lg h-[720px] shadow-xl">
          <div className="hadline">
            <h1 className="text-3xl mb-4">Data diri</h1>
            <hr />
          </div>
          <div className="form-edit-profile mt-8">
            <div className="mb-6">
              <label htmlFor="nama-lengkap" className="block text-[16px] font-medium text-gray-600">
                Nama Lengkap
              </label>
              <input type="text" id="nama-lengkap" name="nama-lengkap" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan nama lengkap" />
            </div>
            <div className="mb-6">
              <label htmlFor="jobdesk" className="block text-[16px] font-medium text-gray-600">
                Job desk
              </label>
              <input type="text" id="jobdesk" name="jobdesk" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan job desk" />
            </div>
            <div className="mb-6">
              <label htmlFor="Domisili" className="block text-[16px] font-medium text-gray-600">
                Domisili
              </label>
              <input type="text" id="Domisili" name="Domisili" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan domisili" />
            </div>
            <div className="mb-6">
              <label htmlFor="Tempat kerja" className="block text-[16px] font-medium text-gray-600">
                Tempat kerja
              </label>
              <input type="text" id="Tempat kerja" name="Tempat kerja" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan tempat kerja" />
            </div>
            <div className="mb-6">
              <label htmlFor="deskripsi" className="block text-[16px] font-medium text-gray-600">
                Deskripsi singkat
              </label>
              <textarea type="text" id="deskripsi" name="deskripsi" className="mt-1 p-4 border w-full h-32 rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none" placeholder="Tuliskan deskripsi singkat" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
