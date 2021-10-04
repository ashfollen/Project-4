
export default function PagePreview({title, bodyText, image}) {

    return (
        <div>
            <h2>Webpage Preview:</h2>
            <div className="page-preview-div-class">
                <h1>{title}</h1>
                <p>{bodyText}</p>
                <img className="preview-image-class" src={image} alt=""/>
            </div>
        </div>
    )

}