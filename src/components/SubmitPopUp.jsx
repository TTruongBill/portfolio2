import './sass/SubmitPopUp.scss'
import ClearIcon from "@mui/icons-material/Clear";

export default function SubmitPopUp({setSent, sent}){
    return(
        <div id="popUp" className={(sent ? "open" : "")}>
            <ClearIcon id="close" onClick={()=>{setSent(false)}}/>
            <h1>Merci!</h1>
            <p>Votre message a été envoyé avec succès.</p>
        </div>
    )
}