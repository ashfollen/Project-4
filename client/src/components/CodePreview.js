import {useState} from 'react'

export default function CodePreview({title, bodyText, image}) {

    return (
        <div>
            <h2>Code Preview:</h2>
            <div className="code-preview-div-class">
                <p>
                    {`<!DOCTYPE html>`}
                    <br/>
                    {`<html>`}
                    <br/>
                    {`<body>`}
                    <br/>
                    {`<h1>`}{title}{`</h1>`}
                    <br/>
                    {`<p>`}{bodyText}{`</p>`}
                    <br/>
                    {`<img src="`}{image}{`"/>`}
                    <br/>
                    {`</body>`}
                    <br/>
                    {`</html>`}
                </p>
            </div>
        </div>
    )

}