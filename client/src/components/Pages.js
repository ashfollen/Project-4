import { useEffect, useState } from "react";
import SavedPagesDisplay from './SavedPagesDisplay'

export default function Pages() {

    const [savedPages, setSavedPages] = useState([])

    function deletePage(id) {
        
        fetch(`/preview_pages/${id}`, {
        method: "DELETE",
        }).then((r) => {
        if (r.ok) {
            setSavedPages((pages) =>
            pages.filter((page) => page.id !== id));
            }
        });
       
    }

    function setPages() {
        fetch("/preview_pages")
        .then((r) => r.json())
        .then((data) => setSavedPages(data));
    }

    useEffect(() => {
        fetch("/preview_pages")
        .then((r) => r.json())
        .then((data) => setSavedPages(data));
      }, [])

      console.log(savedPages)

    return (
        <div className="main">
            <h1 className="header">SAVED PAGES</h1>
            <div className="saved-pages-layout">
                {savedPages.map(page => <SavedPagesDisplay key={page.id} deletePage={deletePage} page={page} />)}
            </div>
        </div>
    )

}