
export default function HTMLPreview({title, bodyText, image, previewClass}) {

    return (
        <div>
            <h2>HTML Preview:</h2>
            <div className="code-preview-div-class">
                <p>
                    {`<!DOCTYPE html>`}
                    <br/>
                    {`<head>`}
                    <br/>
                    <p className="tab">
                        {`<link rel="stylesheet" typle="text/css" href="index.css">`}
                    </p>
                    {`</head>`}
                    <br/>
                    {`<html>`}
                    <br/>
                    {`<body class="`}{previewClass}{`">`}
                    <br/>
                    <p className="tab">
                        {`<h1>`}{title}{`</h1>`}
                        <br/>
                        {`<p>`}{bodyText}{`</p>`}
                        <br/>
                        {`<img src="`}{image}{`"/>`}
                    </p>
                    {`</body>`}
                    <br/>
                    {`</html>`}
                </p>
            </div>
        </div>
    )

}