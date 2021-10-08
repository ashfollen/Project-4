import {useState, useEffect} from 'react'
import PagePreview from './PagePreview'
import HTMLPreview from './HTMLPreview'
import CSSPreview from './CSSPreview'

export default function Home({currentUser, onLogout}) {

    const [pageTitle, setPageTitle] = useState('')
    const [bodyText, setBodyText] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [previewClass, setPreviewClass] = useState('Light')
    const [chosenTheme, setChosenTheme] = useState({})
    const [themes, setThemes] = useState([])

    console.log(currentUser.username)

    useEffect(() => {
        fetch("/themes")
        .then((r) => r.json())
        .then((data) => setThemes(data));
      }, [])

    //   function handleLogout(e) {
    //       e.preventDefault()
    //     fetch("/logout", {
    //       method: "DELETE",
    //     }).then(() => onLogout());
    // }

      function handleThemeChange(e) {
        setChosenTheme(e.target.value);
        fetch(`/themes/${e.target.value}`)
        .then((r) => r.json())
        .then((data) => setPreviewClass(data.name))
      }

      function handleSubmit(e) {
        // e.preventDefault()
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
              image_url: `${imageUrl}`,
              user_id: `${currentUser.id}`
            }),
          })
            .then((r) => r.json())
            .then(data => console.log(data));
      }

    return (
      <div className="main">
        <h1 className="header">BUILD A PAGE </h1>
        <div className="flex-container">
            <div className="steps-class">
                <h2>Steps to create this page as a file on your computer:</h2>
                <ol>
                    <li>Create a new folder with a name of your choosing</li>
                    <li>Create a file within that folder called "index.html"</li>
                    <li>Paste the code from the HTML preview below into your "index.html" file</li>
                    <li>Create a second file within your folder called "index.css"</li>
                    <li>Paste the code from the CSS preview below into your "index.css" file</li>
                    <li>Save all changes and open index.html in your browser to view</li>
                </ol>
            </div>
            <div className="form-div-class">
                <h2 className="div-title">Build your page here!</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input className="form-class" type="text" placeholder="Add your page title..." value={pageTitle} onChange={(e) => setPageTitle(e.target.value)}/>
                    <input className="form-class" type="text" placeholder="Add some body text..." value={bodyText} onChange={(e) => setBodyText(e.target.value)}/>
                    <input className="form-class" type="text" placeholder="Add an image URL..." value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
                    <label htmlFor="themes">Choose a theme: </label>
                    <select name="themes" id="themes" onChange={(e) => handleThemeChange(e)}>
                        {themes.map(theme => <option key={theme.id} value={theme.id}>{theme.name}</option>)}
                    </select>
                    <input className="form-class" type="submit" name="submit" value="Submit"/>
                </form>
            </div>
            <PagePreview title={pageTitle} bodyText={bodyText} image={imageUrl} previewClass={previewClass}/>
            <HTMLPreview previewClass={previewClass} title={pageTitle} bodyText={bodyText} image={imageUrl}/>
            <CSSPreview previewClass={previewClass}/>

        </div>
      </div>
    )
  }