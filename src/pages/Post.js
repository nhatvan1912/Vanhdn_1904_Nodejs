import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/posts/${slug}`)
        .then(res => res.json())
        .then(data => setPost(data));
  }, [slug]);

  if (!post) return <div>Loading...</div>;
  if (post.error) return <div>{post.error}</div>;

  return (
      <div style={{ padding: 20 }}>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
  );
}
