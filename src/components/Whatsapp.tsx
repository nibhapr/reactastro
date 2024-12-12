import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../assets/img/favicon.svg";

const Whatsapp = () => {
	const logoUrl = logo.src;
	return (
		<FloatingWhatsApp
			accountName="Welcome to Bond Sign Abudhabi"
			phoneNumber="+971558952593"
			avatar={logoUrl}
			statusMessage="Live chat now"
			chatMessage="Welcome to Bond Sign Abudhabi 🤝. How can we help?"
		/>
	);
};

export default Whatsapp;
