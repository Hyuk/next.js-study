import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
      <ArticleItem article={article} />
    </div>
  )
}