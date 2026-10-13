function Card({ post }, singleItem) {
  return (
    <div className="item">
      <div className="item_inner">
        <p>{post?.redditCategory}</p>
        <h2>{post?.heading}</h2>

        <div className="img-wrap">
          <img src={post?.image} alt={post?.heading} />
        </div>
        <div className="bottom-wrap">
          <button>Up</button>
          <button>Down</button>
          <button>Comments</button>
        </div>
      </div>
      {singleItem ? <div>Show comments</div> : null}
      <div className="ticks"></div>
    </div>
  );
}

export default Card;
