import Hiring from "../elements/PagesHire";
import NavbarHireChat from "../elements/NavbarChat";
import HireInput from "../elements/InputHire";
import Footer from "../elements/Footer";

export default function Hires(){
    return(
        <>
        <div className="container-full overflow-hidden">
        <NavbarHireChat />
        <div className="container flex m-auto gap-4 py-12">
        <Hiring />
        <HireInput />
        </div>
        <Footer />

        </div>
        </>
    )
}