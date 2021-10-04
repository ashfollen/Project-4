import {useState} from 'react'

export default function PagePreview({title, bodyText, image, previewClass}) {
    

    return (
        <div className = {previewClass}>
            <h2>Webpage Preview:</h2>
            <div className='page-preview-div-class'>
                <h1>{title}</h1>
                <p>{bodyText}</p>
                <img className="preview-image-class" src={image}/>
            </div>
        </div>
    )

}