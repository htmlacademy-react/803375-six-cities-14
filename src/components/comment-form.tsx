import React from 'react';
import {useState} from 'react';
import {MAX_STARS_COUNT} from '../const';

export default function CommentForm () {

  const [formData, setFormData] = useState({
    review: '',
    rating: null,
  });

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          React.Children.toArray([...Array(MAX_STARS_COUNT).keys()].map((i) =>
            (
              <>
                <input onChange={handleFieldChange} className="form__rating-input visually-hidden" name="rating" value={i + 1} id={`${i + 1}-stars`} type="radio" />
                <label htmlFor={`${i + 1}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </>
            )
          ))
        }
      </div>
      <textarea onChange={handleFieldChange} value={formData.review} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved">
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
      </div>
    </form>
  );
}
