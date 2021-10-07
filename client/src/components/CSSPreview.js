
export default function CSSPreview({previewClass}) {

    return (
        <div>
            <h2>CSS Preview:</h2>
            <div className="code-preview-div-class">
                {previewClass == "Light" ? 
                <p>
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
                </p> : previewClass == "Dark" ? 
                <p>
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
                </p> : previewClass == "Colorful" ?
                <p>
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
                </p> : ''} 
            </div>
        </div>
    )

}