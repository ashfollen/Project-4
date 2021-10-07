

export default function SavedPageCode({page, currentTheme}) {

    return (
        <div className="code-preview-div-class">
        <p>
            ******************************************************
            <br/>
            HTML CODE
            <br/> 
            ******************************************************
            <br/>
            <br/>
            {`<!DOCTYPE html>`}
            <br/>
            {`<head>`}
            <br/>
            {`<link rel="stylesheet" typle="text/css" href="index.css">`}
            <br/>
            {`</head>`}
            <br/>
            {`<html>`}
            <br/>
            {`<body>`}
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
            <br/>
            <br/>
            ******************************************************
            <br/>
            CSS CODE 
            <br/>
            ******************************************************
            <br/>
            <br/>
            {currentTheme == "Light" ? 
                <>
                    body {`{`}
                    <br/>
                    text-align: center;
                    <br/>
                    background-color: white;
                    <br/>
                    {`}`}
                    <br/>
                    <br/>
                    p {`{`}
                    <br/>
                    color: gray;
                    <br/>
                    padding-top: 10px;
                    <br/>
                    padding-bottom: 10px;
                    <br/>
                    {`}`}
                    <br/>
                    <br/>
                    img {`{`}
                    <br/>
                    max-width: 600px;
                    <br/>
                    {`}`}
                 </> : currentTheme == "Dark" ? 
                <>
                    body {`{`}
                    <br/>
                    text-align: center;
                    <br/>
                    background-color: black;
                    <br/>
                    color: white;
                    <br/>
                    {`}`}
                    <br/>
                    <br/>
                    p {`{`}
                    <br/>
                    color: lime;
                    <br/>
                    padding-top: 10px;
                    <br/>
                    padding-bottom: 10px;
                    <br/>
                    {`}`}
                    <br/>
                    <br/>
                    img {`{`}
                    <br/>
                    max-width: 600px;
                    <br/>
                    {`}`}
                </> : currentTheme == "Colorful" ?
                <>
                    body {`{`}
                    <br/>
                    text-align: center;
                    <br/>
                    background-image: url("https://archziner.com/wp-content/uploads/2021/02/diagonal-lines-in-the-colors-of-the-rainbow-cute-colorful-wallpaper-red-prange-yellow-green-blue-purple.jpg");
                    <br/>
                    color: magenta;
                    <br/>
                    {`}`}
                    <br/>
                    <br/>
                    p {`{`}
                    <br/>
                    color: darkblue;
                    <br/>
                    padding-top: 10px;
                    <br/>
                    padding-bottom: 10px;
                    <br/>
                    {`}`}
                    <br/>
                    <br/>
                    img {`{`}
                    <br/>
                    max-width: 600px;
                    <br/>
                    {`}`}
                </> : ''}  
            </p>
        </div>
    )

}