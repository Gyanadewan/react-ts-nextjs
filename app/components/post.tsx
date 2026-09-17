import Link from "next/link"


function BlogPost({post}) {
    const {title,description,id} = post
  return (
   <div className="card card-border bg-base-100 w-96">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
     
     <Link href={`/blogs/${id}`}>
       <button className="btn btn-primary">Details</button>
     </Link>
    </div>
  </div>
</div>
  )
}

export default BlogPost
