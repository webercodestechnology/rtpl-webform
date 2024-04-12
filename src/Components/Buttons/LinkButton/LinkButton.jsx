import { Link } from "react-router-dom";
import "./LinkButton.css"

const LinkButton = ({title,target})=><Link class="button1" to={target}>{title}</Link>

export default LinkButton;