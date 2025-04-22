import { useState, useEffect } from 'react';

function Comments() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'Sofi Eriyanti',
      date: '5 Juni 2025',
      comment: 'Selamat atas pernikahan kalian! Semoga menjadi keluarga yang sakinah, mawaddah, dan warahmah.',
      liked: false
    },
    {
      id: 2,
      name: 'Srianida',
      date: '8 Juni 2025',
      comment: 'Bahagia selalu untuk Fajar dan Erik! Semoga pernikahan kalian lancar dan diberkahi.',
      liked: false
    }
  ]);

  const [newComment, setNewComment] = useState({
    name: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newComment.name.trim() === '' || newComment.comment.trim() === '') {
      return;
    }
    
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
    
    const comment = {
      id: comments.length + 1,
      name: newComment.name,
      date: formattedDate,
      comment: newComment.comment,
      liked: false
    };
    
    setComments([comment, ...comments]);
    setNewComment({ name: '', comment: '' });
  };

  const toggleLike = (id) => {
    setComments(comments.map(comment => 
      comment.id === id ? { ...comment, liked: !comment.liked } : comment
    ));
  };

  return (
    <div className="space-y-8">
      <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg" data-aos="fade-up">
        <h3 className="text-xl font-serif mb-4">Berikan Ucapan</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newComment.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="comment" className="block mb-2 text-sm font-medium">Ucapan/Doa</label>
            <textarea
              id="comment"
              name="comment"
              value={newComment.comment}
              onChange={handleChange}
              required
              rows="3"
              className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            ></textarea>
          </div>
          
          <div className="text-right">
            <button
              type="submit"
              className="bg-amber-600 px-6 py-2 rounded-full hover:bg-amber-700 transition-all font-medium"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
      
      <div className="space-y-4" data-aos="fade-up">
        {comments.map(comment => (
          <div key={comment.id} className="bg-gray-800 bg-opacity-80 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium">{comment.name}</h4>
                <p className="text-xs text-gray-400">{comment.date}</p>
              </div>
              <button
                onClick={() => toggleLike(comment.id)}
                className={`flex items-center space-x-1 ${comment.liked ? 'text-pink-500' : 'text-gray-400'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={comment.liked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            <p className="text-gray-300">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;