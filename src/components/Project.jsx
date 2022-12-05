import './sass/Project.scss';

export default function Project({title, img, imgName, link, content, date}){

    return(
        <section className='project'>
            <img src={"./images/" + img + ".jpg"} alt="" />
            <h1>{title}</h1>
            <p>{content}</p>
        </section>
    )
}