import Image from "../elements/GambarLogin";
import FormNewPassword from "../elements/FormNewPassword";

export default function ResetPassword() {
  return (
    <div className="container-full h-screen flex justify-evenly py-10 bg-[#F6F7F8]">
      <Image />
      <FormNewPassword />
    </div>
  );
}
