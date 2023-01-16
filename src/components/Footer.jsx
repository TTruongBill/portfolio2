import './sass/Footer.scss'
import { useState } from 'react';
import {sendEmail} from '../emailJS';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import SubmitPopUp from './SubmitPopUp';

export default function Footer(){
    const [sent, setSent] = useState(false);
    const [toSend, setToSend] = useState({
        from_name: '',
        from_nameFam: '',
        to_name: '',
        message: '',
        number: '',
        reply_to: '',
      });

    function onSubmit(e){
        e.preventDefault();
        if(sent == false){
            sendEmail(toSend);
            setSent(true);
        } 
    };

    function handleChange(e){
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return(
        <div className="foot" id="foot">
            <h2>Contact</h2>
            <div id="footerInfo">
                <div id="contact">
                    <h1>Envoyer Un Courriel</h1>
                    <p className='miniCom'>Si vous êtes intéressé à me connaître davantage, vous pouvez remplir le formulaire ci-dessous!</p>
                    <form onSubmit={onSubmit} className='contactForm'>
                        <p>Prénom</p>
                        <input id="name" type="text" name='from_name' value={toSend.from_name} onChange={handleChange}/>
                        <p>Nom*</p>
                        <input required id="nameFam" type="text" name='from_nameFam' value={toSend.from_nameFam} onChange={handleChange}/>
                        <p>Courriel*</p>
                        <input required id="email" placeholder="ex: monnom@example.com"type="email" name='reply_to' value={toSend.reply_to} onChange={handleChange}/>
                        <p>Téléphone</p>
                        <input id="number" placeholder="ex: 514-999-9999" type="tel" name='number' value={toSend.number} onChange={handleChange} pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"/>
                        <p>Message*</p>
                        <textarea required id="content" name='message' value={toSend.message} onChange={handleChange}></textarea>
                        <input id="submit" type="submit"/>
                    </form>
                </div>
                <div id="secDiv">
                    <div id='myInfo'>
                        <h1>Mes Informations</h1>
                        <p className='miniCom'>Si vous préférez me contacter d'une manière autre que le formulaire, voici mes informations.</p>
                        <div className="infoContent">
                            <div className='info'>
                                <EmailIcon/>
                                <p>tientientruong1@gmail.com</p>
                            </div>
                            <div className='info'>
                                <PhoneIcon/>
                                <p>514-830-5213</p>
                            </div> 
                            <div className='info'>
                                <HomeIcon/>
                                <p>Montréal, QC</p>
                            </div>
                           
                        </div>
                    </div>
                    <div id='other'>
                        <h1>Mes Réseaux</h1>
                        <p className='miniCom'>Si vous voulez en savoir plus à propos de moi, voici mon linkedin, mon github et mon cv.</p>
                        <div className="infoContent">
                            <div className='info'>
                                <LinkedInIcon href="https://www.linkedin.com/in/tien-tien-truong/"/>
                                <p><a href="https://www.linkedin.com/in/tien-tien-truong/">LinkedIn</a></p>
                            </div> 
                            <div className='info'>
                                <GitHubIcon href="https://github.com/k1polo"/>
                                <p><a href="https://github.com/k1polo">GitHub</a></p>
                            </div> 
                        </div>
                    </div>
                    <div className="infoContent" id='cv'>
                        <div className='info'>
                            <DownloadIcon href="images/Truong_TienTienBill_CV.pdf" download="images/Truong_TienTienBill_CV.pdf"/>
                            <p><a href="images/Truong_TienTienBill_CV.pdf" download="images/Truong_TienTienBill_CV.pdf">Clickez pour obtenir mon CV</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <p id="copyright">&copy;Tien Tien Bill Truong, 2023</p>
            <SubmitPopUp setSent={setSent} sent={sent}/>
        </div>
    )
}
