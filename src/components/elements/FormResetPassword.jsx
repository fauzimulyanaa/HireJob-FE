export default function FormResetPassword() {
  return (
    <section>
      <div className="container-form max-w-md mx-auto py-8 px-4">
        <h1 className="text-3xl my-5 text-center">Reset password</h1>
        <p className="my-8  text-center">Enter your user {"account's"} verified email address and we will send you a password reset link.</p>
        <form>
          <div className="container-form">
            <div className="mb-4">
              <label htmlFor="email" className="block text-[16px]  font-medium text-gray-600">
                Email
              </label>
              <input type="email" id="email" name="email" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan alamat email" />
            </div>
            <div>
              <button type="submit" className="w-full bg-[#FBB017] text-white py-2 px-4 rounded-md hover:bg=[#FBB017] focus:outline-none focus:ring focus:border-blue-300">
                Send password reset email
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
