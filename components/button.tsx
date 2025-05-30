import { IButton } from "@/app/types";
import { FaChevronRight } from "react-icons/fa6";

export default function Button({
	text,
	className = "btn-primary",
	href
}: IButton) {
	return (
		<a className={className} href={href}>
			<div>{text}</div>
			<FaChevronRight />
		</a>
	);
}
