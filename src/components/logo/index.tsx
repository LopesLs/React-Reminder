import { Image } from "./styles"
import RRLogo from "../../assets/images/RRLogo.png"

export function Logo() {
  return (
    <Image>
      <img src={RRLogo} alt="Logo React Reminder" />
    </Image>
  )
}