export default function SavedPagePreview({page, currentTheme}) {

    return (

            <div className="saved-pages-class">
                <div className={currentTheme}>
                <h1>{page.title}</h1>
                <p>{page.body_text}</p>
                <img className="preview-image-class" src={page.image_url} alt="your selected image"/>
                </div>
            </div> 

    )

}