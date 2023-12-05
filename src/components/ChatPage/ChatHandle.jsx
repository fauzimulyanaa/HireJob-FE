import Chating from "../elements/Chat";
import NavbarHireChat from "../elements/NavbarChat";
import Footer from "../elements/Footer";

export default function ChatControl(){
    return(
        <>
        <div className="bg-[#F6F7F8] w-screen">
        <NavbarHireChat />
        <Chating />
        <Footer />
        </div>
        </>

    )
}