import {useState} from 'react'

export default function Form() {

    const [pageTitle, setPageTitle] = useState('')
    const [bodyText, setBodyText] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    return (
        <div className="form-div-class">
            <h2 className="div-title">Build your page here!</h2>
            <form>
                <input className="form-class" type="text" placeholder="Add your page title..." value={pageTitle} onChange={(e) => setPageTitle(e.target.value)}/>
                <input className="form-class" type="text" placeholder="Add some body text..." value={bodyText} onChange={(e) => setBodyText(e.target.value)}/>
                <input className="form-class" type="text" placeholder="Add an image URL..." value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
                <label for="themes">Choose a theme: </label>
                <select name="themes" id="themes">
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    <option value="colorful">Colorful</option>
                </select>
                <input className="form-class" type="submit" name="submit" value="Submit"/>
            </form>
        </div>
    )

}