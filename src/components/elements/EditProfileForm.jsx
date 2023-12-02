export default function EditProfileForm() {
  return (
    <section>
      <div className="form-edit-company mt-[-200px] pb-56">
        <div className="wrapper-form bg-white w-[700px] p-10 rounded-lg h-[1200px] shadow-xl">
          <div className="hadline">
            <h1>Data diri</h1>
            <hr />
          </div>
          <div className="form-edit-profile mt-4">
            <div className="mb-6">
              <label htmlFor="confpassword" className="block text-[16px] font-medium text-gray-600">
                Nama Perusahaan
              </label>
              <input type="password" id="confpassword" name="confpassword" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan nama perusahan" />
            </div>
            <div className="mb-6">
              <label htmlFor="confpassword" className="block text-[16px] font-medium text-gray-600">
                Bidang
              </label>
              <input type="password" id="confpassword" name="confpassword" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan bidang perusahaan ex : Financial" />
            </div>
            <div className="mb-6">
              <label htmlFor="confpassword" className="block text-[16px] font-medium text-gray-600">
                Provinsi
              </label>
              <input type="password" id="confpassword" name="confpassword" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan Provinsi" />
            </div>
            <div className="mb-6">
              <label htmlFor="confpassword" className="block text-[16px] font-medium text-gray-600">
                Kota
              </label>
              <input type="password" id="confpassword" name="confpassword" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan Kota" />
            </div>
            <div className="mb-6">
              <label htmlFor="confpassword" className="block text-[16px] font-medium text-gray-600">
                Deskripsi singkat
              </label>
              <textarea type="password" id="confpassword" name="confpassword" className="mt-1 p-4 border w-full h-32 rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none" placeholder="Tuliskan deskripsi singkat" />
            </div>
            <div className="mb-6">
              <label htmlFor="confpassword" className="block text-[16px] font-medium text-gray-600">
                Email
              </label>
              <input type="password" id="confpassword" name="confpassword" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan email" />
            </div>
            <div className="mb-6">
              <label htmlFor="confpassword" className="block text-[16px] font-medium text-gray-600">
                Email Perusahaan
              </label>
              <input type="password" id="confpassword" name="confpassword" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan email Perusahaan" />
            </div>
            <div className="mb-6">
              <label htmlFor="confpassword" className="block text-[16px] font-medium text-gray-600">
                Nomor Telepon
              </label>
              <input type="password" id="confpassword" name="confpassword" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan nomor telepon" />
            </div>
            <div className="mb-6">
              <label htmlFor="confpassword" className="block text-[16px] font-medium text-gray-600">
                Linkedin
              </label>
              <input type="password" id="confpassword" name="confpassword" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan nama Linkedin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
