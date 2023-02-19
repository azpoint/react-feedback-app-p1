import { useParams } from "react-router-dom"

function Post() {
    const params = useParams()

  return (
    <div>
        This is a post with the following params:
        <p>Name: {params.name}</p>
        <p>Phrase: {params.phrase}</p>
    </div>
  )
}

export default Post