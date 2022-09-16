import { useEffect, useState } from 'react';
import './Comments.scss';
import { v4 as uuid } from 'uuid';
import LikeIcon from "../assets/Vector.svg";
import CloseIcon from "../assets/close.svg";
import SendIcon from "../assets/send.svg";

function Comments() {

  const commentsData = [
    {
      id: 1,
      author: "Becca",
      comment: "This is what happens when you try to make 1,000 drinks during the morning rush! Who knew you couldn’t juggle drinks! Will def clean it up! Haha!",
      likes: 15,
      status: "false",
      profileImg: "http://localhost:3000/images/Becca.jpg"
    },
    {
      id: 2,
      author: "Steve",
      comment: "Look how I rearranged our coffee setup, took me quite a while! Please don’t mess it up! Also, someone please bring the cups out from the back, we need more!",
      likes: 8,
      status: "false",
      profileImg: "http://localhost:3000/images/Steve.jpg"
    },
    {
      id: 3,
      author: "Sophie",
      comment: "We had so much fun with the boys going out post-work on friday! Check out this dope photo we took while we were still sober ;)",
      likes: 100,
      status: "false",
      profileImg: "http://localhost:3000/images/Sophie.jpg"
    }
  ];

  const urlData = ["http://localhost:3000/images/second.jpg", "http://localhost:3000/images/first.jpg", "http://localhost:3000/images/third.jpg"]

  const [comments, setComments] = useState(commentsData);
  const [imageUrl, setImageUrl] = useState(urlData);
  const [currentImage, setCurrentImage] = useState("http://localhost:3000/images/idea.jpeg");
  const [visible, setVisible] = useState(false);
  const [liked, setLiked] = useState(false);
  const unique_id = uuid();
  const small_id = unique_id.slice(0,8);


  useEffect(()=>{

  }, [comments, imageUrl, currentImage, liked]);




  const handleSubmit = (event) => {
    setVisible(false);

    event.preventDefault();
    const comment = event.target.comment.value;

    if(!comment) {
      return;
    }

    let newURL = "http://localhost:3000/images/idea.jpeg";

    if(currentImage !== "http://localhost:3000/images/idea.jpeg") {
      newURL = URL.createObjectURL(currentImage);
    }
    
    setImageUrl([...imageUrl, newURL]);


    const newComment = {
      author: "Olivia",
      comment: comment,
      id: small_id,
      likes: 0,
      status: "false",
      profileImg: "http://localhost:3000/images/Olivia.jpg"
    };
    
    let newCommentData = [...comments, newComment];
  
    setComments(newCommentData);
    setCurrentImage("http://localhost:3000/images/idea.jpeg")
  }

  const uploadImage = (event) => {
    event.preventDefault();
    setCurrentImage(event.target.files[0]);
    
  }

  const handleClick = (event) => {
    event.preventDefault();
    setVisible(!visible);
  }

  const handleLike = (id) => {
    comments.map((comment)=>{
        if(id === comment.id){
          if(comment.status=== "false"){
            comment.likes = comment.likes + 1;
            comment.status = "true";
          } else {
            comment.likes = comment.likes - 1;
            comment.status = "false";
          }
            
        }
        setLiked(!liked)
    })
  }


  return (
    <div className='container'>
      <div className='top'>
        <div className='top__left'>
          <h2 className='top__title'>Comments & Ideas</h2>
          <p>
          Leave comments or improvement ideas here to help your manager and team members improve the restaurant or just have fun! Like ideas and comments to make them pop to the top. 
          </p>
        </div>
        <button className='top__button' onClick={handleClick}>Add Comment</button>
      </div>
      {comments.map((comment, i)=>{
        return(
          <div key={comment.id} className="comment">
            <div className='comment__left'>
              <div className='comment__profile' style={{backgroundImage: `url(${comment.profileImg})`}}></div>
              <div className='comment__like'>
                <img src={LikeIcon} onClick={()=>{handleLike(comment.id)}} className="comment__like-icon"/>
                <p className='comment__like-number'>{comment.likes}</p>
              </div>
            </div>
            <div className='comment__middle'>
              <h3 className='comment__author'>{comment.author}</h3>
              <p className='comment__content'>{comment.comment}</p>
            </div>
            <div className='comment__right'>
              <img className="comment__image" src={imageUrl[i]} alt="descriptive file" />
            </div>
          </div>
        )
      })}
      {visible &&
      <div className='modal'>
        <div className='modal__container'>
        <div className='modal__top'>
          <h2>Add Comment</h2>
          <div className='modal__close' onClick={handleClick}> 
            <img src={CloseIcon} alt="close"/>
          </div>
        </div>
          <form className='modal__form' onSubmit={handleSubmit}>
            <textarea className='modal__textarea' type="text" name="comment" placeholder="Your idea is here ..."/>
            <div className='modal__bottom'>
              <input className='modal__input-img' type="file" multiple accept="image/*" onChange={uploadImage}/>
              <button className='modal__button' type="submit" value="submit" ><img src={SendIcon} /></button>
            </div>
          </form>
        </div>
      </div>}
    </div>
  );
}

export default Comments;
