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

    // function saveEdit(id, newTheme) {
    //     fetch(`/preview_pages/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           theme_id: `${newTheme}`
    //         }),
    //       })
    //         .then((r) => r.json())
    //         .then(data => console.log(data));
    // }

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
        <div>
            <h1>Saved Pages:</h1>
            {savedPages.map(page => <SavedPagesDisplay key={page.id} setPages={setPages} deletePage={deletePage} page={page} />)}
        </div>
    )

}