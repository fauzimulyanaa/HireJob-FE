export default function FormResetPassword() {
  return (
    <section>
      <div className="container-form max-w-md mx-auto py-8 px-4">
        <h1 className="text-3xl my-5 text-center">Otp</h1>
        <p className="my-8  text-center">Enter your user {"account's"} verified email address and we will send you a password reset link.</p>
        <form>
          <div className="container-form">
            <div className="mb-4">
              <label htmlFor="email" className="block text-[16px]  font-medium text-gray-600">
                Email
              </label>
              <input type="email" id="email" name="email" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan alamat email" />
            </div>
            <div className="mb-4">
              <label htmlFor="otp" className="block text-[16px]  font-medium text-gray-600">
                Otp
              </label>
              <input type="text" id="otp" name="otp" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan OTP" />
            </div>
            <div>
              <button type="submit" className="w-full bg-[#FBB017] text-white py-2 px-4 rounded-md hover:bg=[#FBB017] focus:outline-none focus:ring focus:border-blue-300">
                Go To Change Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
