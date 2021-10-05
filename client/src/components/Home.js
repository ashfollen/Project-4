import {useState, useEffect} from 'react'
import PagePreview from './PagePreview'
import CodePreview from './CodePreview'

export default function Home () {

    const [pageTitle, setPageTitle] = useState('')
    const [bodyText, setBodyText] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [previewClass, setPreviewClass] = useState('light')
    const [chosenTheme, setChosenTheme] = useState({})
    const [themes, setThemes] = useState([])

    useEffect(() => {
        fetch("/themes")
        .then((r) => r.json())
        .then((data) => setThemes(data));
      }, [])

      function handleThemeChange(e) {
        setChosenTheme(e.target.value.id);
        fetch(`/themes/${e.target.value}`)
        .then((r) => r.json())
        .then((data) => setPreviewClass(data.name))
        // updateClass(e.target.value)
      }

      function handleSubmit() {
        fetch("/preview_pages", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: `${pageTitle}`,
              code: "placeholder code",
              body_text: `${bodyText}`,
              theme_id: `${chosenTheme}`,
              image_url: `${imageUrl}`
            }),
          })
            .then((r) => r.json())
            .then(data => console.log("submitted"));
      }


    return (
        <div className="flex-container">
            <div className="form-div-class">
                <h2 className="div-title">Build your page here!</h2>
                <form onSubmit={handleSubmit}>
                    <input className="form-class" type="text" placeholder="Add your page title..." value={pageTitle} onChange={(e) => setPageTitle(e.target.value)}/>
                    <input className="form-class" type="text" placeholder="Add some body text..." value={bodyText} onChange={(e) => setBodyText(e.target.value)}/>
                    <input className="form-class" type="text" placeholder="Add an image URL..." value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>

                    <label htmlFor="themes">Choose a theme: </label>
                    <select name="themes" id="themes" value={previewClass} onChange={(e) => handleThemeChange(e)}>
                        {themes.map(theme => <option key={theme.id} value={theme.id}>{theme.name}</option>)}
                    </select>
                    <input className="form-class" type="submit" name="submit" value="Submit"/>
                </form>
            </div>
            <PagePreview title={pageTitle} bodyText={bodyText} image={imageUrl} previewClass={previewClass}/>
            <CodePreview title={pageTitle} bodyText={bodyText} image={imageUrl}/>
        </div>
    )

}