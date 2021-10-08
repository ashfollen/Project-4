
export default function CSSPreview({previewClass}) {

    return (
        <div>
            <h2>CSS Preview:</h2>
            <div className="code-preview-div-class">
                {previewClass == "Light" ? 
                <p>
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
                </p> : previewClass == "Dark" ? 
                <p>
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
                </p> : previewClass == "Colorful" ?
                <p>
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
                </p> : ''} 
            </div>
        </div>
    )

}