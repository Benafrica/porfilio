/**
 * This JS File Will Handle All Blog Articles 
 */

/**
 * Pre Loader
 */

window.addEventListener('load', () => {
    fetchArticles()
});


const apiUrl = 'https://benafrica-api.herokuapp.com'

/**
* Fetching The Articles From The API
*/



const fetchArticles = () => {
    fetch(`${apiUrl}/admin/blog_articles`).then( res => {

        if (res.ok !== true ) return console.log(`Error Happened...>> Status Code: ${res.status}`)
        else return res.json()
    }).then(fetchedData => {
        console.log(fetchedData)
        // Storing & Outputing Blog Articles Data
        let article=""
        fetchedData.map(values => {
            article+= `<div class="box"  id="${values._id}">
            <div>
                <img src="../images/blog-img1.jpg" alt="blog 2 image" class="box-img">
            </div>
            <div class="box-content">
                <h4>${values.title}</h4>
                <h6>April 6, 2021</h6>
                <p>${values.articleContent}</p>
                <div class="blog-btn">
                    <a class="btn-blog" onclick="ArticleView('${values._id}')">Read More</a>
                    <div class="blog-btn-r-side">
                        <span class="blog-stats"><span class="counter">5</span><i class="uil uil-thumbs-up"></i></span>
                        <span class="blog-stats"><span class="counter">5</><i class="uil uil-comment-lines"></i></span>
                    </div>
                </div>
            </div>
        </div>`
        })
        document.getElementById('blogArticles').innerHTML = article
    }).catch(err => {
        console.error(err)
    })
}


const ArticleView = (ArticleId) => {
    alert(ArticleId)
    console.log(ArticleId)
}






