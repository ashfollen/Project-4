
import { useState } from 'react'
import SavedPagePreview from './SavedPagePreview'
import SavedPageCode from './SavedPageCode'

export default function SavedPagesDisplay({page, deletePage}) {

    const [toggleCodePage, setToggleCodePage] = useState(true)

    function handleClick() {
        deletePage(page.id)
    }

    function toggle() {
        setToggleCodePage(!toggleCodePage)
    }

    return (
            <div className="saved-page-layout-individual" onClick={toggle}>
                {toggleCodePage ? 
                <SavedPagePreview page={page}/> :
                <SavedPageCode page={page}/>
                }
                <button onClick={handleClick}>Delete Page</button>
            </div>
    )

}