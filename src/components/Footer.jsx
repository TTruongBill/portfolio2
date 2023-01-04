import './sass/Footer.scss'
import { useState } from 'react';
import {sendEmail} from '../emailJS';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';

export default function Footer(){
    const [toSend, setToSend] = useState({
        from_name: '',
        from_nameFam: '',
        to_name: '',
        message: '',
        number: '',
        reply_to: '',
      });

    const onSubmit = (e) => {
        e.preventDefault();
        sendEmail(toSend);
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return(
        <div className="foot" id="foot">
            <h2>Contact</h2>
            <div id="footerInfo">
                <div id="contact">
                    <h1>Envoyez Un Courriel</h1>
                    <p className='miniCom'>Si vous êtes intéressé à me connaître davantage, vous pouvez remplir le formulaire ci dessous!</p>
                    <form onSubmit={onSubmit} className='contactForm'>
                        <p>Prénom</p>
                        <input id="name" type="text" name='from_name' value={toSend.from_name} onChange={handleChange}/>
                        <p>Nom*</p>
                        <input required id="nameFam" type="text" name='from_nameFam' value={toSend.from_nameFam} onChange={handleChange}/>
                        <p>Courriel*</p>
                        <input required id="email" placeholder="ex: monnom@example.com"type="email" name='reply_to' value={toSend.reply_to} onChange={handleChange}/>
                        <p>Téléphone*</p>
                        <input required id="number" placeholder="ex: 514-999-9999" type="tel" name='number' value={toSend.number} onChange={handleChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                        <p>Message*</p>
                        <textarea required id="content" name='message' value={toSend.message} onChange={handleChange}></textarea>
                        <input id="submit" type="submit" />
                    </form>
                </div>
                <div id='myInfo'>
                <h1>Mes Informations</h1>
                <p className='miniCom'>Si vous préférez me contacter d'une manière autre que le formulaire, voici mes informations.</p>
                    <div id="infoContent">
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
            </div>
            <p id="copyright">&copy;Tien Tien Bill Truong, 2023</p>
        </div>
    )
}
