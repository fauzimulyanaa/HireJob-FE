import FormInput from "../elements/FormRegisterWorker";
import GambarLogin from "../elements/GambarLogin";

export default function FormRegister() {
  return (
    <>
      <section>
        <div className="wrapper-register flex justify-evenly  py-10 bg-[#F6F7F8]">
          <GambarLogin />
          <FormInput />
        </div>
      </section>
    </>
  );
}
