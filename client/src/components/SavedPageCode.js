

export default function SavedPageCode({page, currentTheme}) {

    return (
        <div className="code-preview-div-class">
        <p>
            ********************************************
            <br/>
            HTML CODE
            <br/> 
            ********************************************
            <br/>
            <br/>
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
                {`<body class="`}{currentTheme}{`">`}
                <br/>
                <p className="tab">
                    {`<h1>`}{page.title}{`</h1>`}
                    <br/>
                    {`<p>`}{page.body_text}{`</p>`}
                    <br/>
                    {`<img src="`}{page.image}{`"/>`}
                </p>
                {`</body>`}
                <br/>
                {`</html>`}
            <br/>
            <br/>
            ********************************************
            <br/>
            CSS CODE 
            <br/>
            ********************************************
            <br/>
            <br/>
                {currentTheme == "Light" ? 
                <>
                body {`{`}
                <br/>
                <p className="tab">   
                    text-align: center;
                    <br/>
                    background-color: white;
                </p>
                {`}`}
                <br/>
                <br/>
                p {`{`}
                <br/>
                <p className="tab">
                    color: gray;
                    <br/>
                    padding-top: 10px;
                    <br/>
                    padding-bottom: 10px;
                </p>
                {`}`}
                <br/>
                <br/>
                img {`{`}
                <br/>
                <p className="tab">
                    max-width: 600px;
                </p>
                {`}`}
                </> : currentTheme == "Dark" ? 
                <>
                body {`{`}
                <br/>
                <p className="tab">
                    text-align: center;
                    <br/>
                    background-color: rgb(22, 22, 22);
                    <br/>
                    color: white;
                </p>
                {`}`}
                <br/>
                <br/>
                p {`{`}
                <br/>
                <p className="tab">
                    color: lime;
                    <br/>
                    padding-top: 10px;
                    <br/>
                    padding-bottom: 10px;
                </p>
                {`}`}
                <br/>
                <br/>
                img {`{`}
                <br/>
                <p className="tab">
                    max-width: 600px;
                </p>
                {`}`}
                </> : currentTheme == "Colorful" ?
                <>
                <br/>
                body {`{`}
                <br/>
                <p className="tab">
                    text-align: center;
                    <br/>
                    background: rgb(131,58,180);
                    <br/>
                    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
                    <br/>
                    color: magenta;
                </p>
                {`}`}
                <br/>
                <br/>
                p {`{`}
                <br/>
                <p className="tab">
                    color: darkblue;
                    <br/>
                    padding-top: 10px;
                    <br/>
                    padding-bottom: 10px;
                </p>
                {`}`}
                <br/>
                <br/>
                img {`{`}
                <br/>
                <p className="tab">
                    max-width: 600px;
                </p>
                {`}`}
                </> : ''} 
            </p>
        </div>
    )

}