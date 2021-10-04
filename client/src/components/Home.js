import {useState} from 'react'
import Form from './Form'
import PagePreview from './PagePreview'
import CodePreview from './CodePreview'

export default function Home() {

    const [pageTitle, setPageTitle] = useState('')
    const [bodyText, setBodyText] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [previewClass, setPreviewClass] = useState('light')

    return (
        <div className="flex-container">
            <div className="form-div-class">
                <h2 className="div-title">Build your page here!</h2>
                <form>
                    <input className="form-class" type="text" placeholder="Add your page title..." value={pageTitle} onChange={(e) => setPageTitle(e.target.value)}/>
                    <input className="form-class" type="text" placeholder="Add some body text..." value={bodyText} onChange={(e) => setBodyText(e.target.value)}/>
                    <input className="form-class" type="text" placeholder="Add an image URL..." value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
                    <label htmlFor="themes">Choose a theme: </label>
                    <select name="themes" id="themes" value={previewClass} onChange={(e) => setPreviewClass(e.target.value)}>
                      <option value="dark">Dark</option>
                      <option value="light">Light</option>
                      <option value="colorful">Colorful</option>
                    </select>
                    <input className="form-class" type="submit" name="submit" value="Submit"/>
                </form>
            </div>
            <PagePreview title={pageTitle} bodyText={bodyText} image={imageUrl} previewClass={previewClass}/>
            <CodePreview title={pageTitle} bodyText={bodyText} image={imageUrl}/>
        </div>
    )

}