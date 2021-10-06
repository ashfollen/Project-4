
import { useState, useEffect } from 'react'
import SavedPagePreview from './SavedPagePreview'
import SavedPageCode from './SavedPageCode'

export default function SavedPagesDisplay({page, deletePage}) {
    
    const [toggleCodePage, setToggleCodePage] = useState(true)
    const [openDropdown, setOpenDropdown] = useState(false)
    const [themes, setThemes] = useState([])
    const [currentTheme, setCurrentTheme] = useState('')
    
    useEffect(() => {
        fetch("/themes")
        .then((r) => r.json())
        .then((data) => {
            setThemes(data)
            data.map((item) => item.id == page.theme_id ? setCurrentTheme(item.name) : '')
        });
      }, [])

      
      function handleDeleteClick(e) {
          e.preventDefault()
          deletePage(page.id)
        }
        
        function handleEditClick(e) {
            e.preventDefault()
            setOpenDropdown(!openDropdown)   
    }

    function handleThemeChange(e) {

        fetch(`/themes/${e.target.value}`)
        .then((r) => r.json())
        .then((data) => setCurrentTheme(data.name))
      
        fetch(`/preview_pages/${page.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              theme_id: `${e.target.value}`
            }),
          })
            .then((r) => r.json())
            .then(data => console.log(data));

      }

    function toggle() {
        setToggleCodePage(!toggleCodePage)
    }

    return (
        <>
            <div onClick={toggle}>
                {toggleCodePage ? 
                <SavedPagePreview currentTheme={currentTheme} page={page}/> :
                <SavedPageCode page={page} currentTheme={currentTheme}/>
                }
            </div>
            <div>
                <button onClick={handleDeleteClick}>Delete Page</button>
                <button onClick={handleEditClick}>Change Theme</button>
                {openDropdown ? 
                <select name="themes" id="themes" onChange={(e) => handleThemeChange(e)}>
                    {themes.map(theme => <option key={theme.id} value={theme.id}>{theme.name}</option>)
                    }
                </select> : ''
                }
            </div>
        </>
    )

}