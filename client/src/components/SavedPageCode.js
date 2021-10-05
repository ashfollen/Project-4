

export default function SavedPageCode({page}) {

    return (
        <div className="code-preview-div-class">
        <p>
            {`<!DOCTYPE html>`}
            <br/>
            {`<html>`}
            <br/>
            {`<body class="`}{`">`}
            <br/>
            {`<h1>`}{page.title}{`</h1>`}
            <br/>
            {`<p>`}{page.body_text}{`</p>`}
            <br/>
            {`<img src="`}{page.image_url}{`"/>`}
            <br/>
            {`</body>`}
            <br/>
            {`</html>`}
        </p>
    </div>
    )

}