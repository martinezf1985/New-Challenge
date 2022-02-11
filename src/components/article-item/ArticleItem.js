// import './style.css'
// import {NewArticle2}  from '../../pages/new-article/NewArticle2'
  



export const ArticleItem = ({ title, userId, body }) => (
  
  

  <div className="article-item">
    <span>{title}</span>
    {/* <span>{userId}</span> */}
    <span>{body}</span>
  </div>
)
