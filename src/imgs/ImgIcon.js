import povecanje from "./povecanje.svg"
import prikljucak from "./prikljucak.svg"
import razdioba2 from "./razdioba2.svg"
import razdioba3 from "./razdioba3.svg"

const ImgIcon = (props) => {

    if(props.vrstaNaloga === "povecanje") return <img src={povecanje} alt="symbol" title="Povećanje snage"/>
    if(props.vrstaNaloga === "prikljucak") return <img src={prikljucak} alt="symbol" title="Novi priključak"/>
    if(props.vrstaNaloga === "razdioba2") return <img src={razdioba2} alt="symbol" title="Razdioba na dva MM" />
    if(props.vrstaNaloga === "razdioba3") return <img src={razdioba3} alt="symbol" title="Razdioba na 3 MM" />

    return <img alt="noImg" />
}

export default ImgIcon