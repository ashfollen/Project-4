
export default function PagePreview({title, bodyText, image, previewClass}) {
    
    return (
        <div>
            <h2>Webpage Preview:</h2>
            <div className="page-preview-div-class">
                <div className={previewClass}>
                    <h1>{title}</h1>
                    <p>{bodyText}</p>
                    <img className="preview-image-class" src={image}/>
                </div>
            </div>
        </div>
    )

}