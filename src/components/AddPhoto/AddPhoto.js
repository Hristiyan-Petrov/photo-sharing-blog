import { useState } from "react";
import * as photoService from '../../services/photoServise';
import "./AddPhoto.css";

const AddPhoto = ({
   history,
   email
}) => {
   const [validationMessage, setMessage] = useState(null);

   const onSubmitHandler = (e) => {
      e.preventDefault();

      const { imageURL, description, category } = e.target;

      if (imageURL.value == '' || description.value == '') {
         setMessage('Image Url and desctiption cannot be empty.')
         return;
      }

      photoService.addPhoto(imageURL, description, category, email)
         .then(createdPhoto => {
            console.log(createdPhoto.id);
            history.push('/');
         })
         .catch(err => console.log(err));
   };

   let hasMessage = Boolean(validationMessage);

   return (
      <section className="create">
         <form onSubmit={onSubmitHandler}>
            <fieldset>
               <legend>Add your photo</legend>
               <p className="field">
                  <label htmlFor="imageURL">Image URL</label>
                  <span className="input">
                     <input type="text" name="imageURL" id="imageURL" placeholder="Image Url" />
                  </span>
               </p>

               <p className="field">
                  <label htmlFor="description">Short description</label>
                  <span className="input">
                     <input type="text" name="description" id="description" placeholder="Short description" />
                  </span>
               </p>

               <p className="field">
                  <label htmlFor="category">Category</label>
                  <span className="input">
                     <select type="text" name="category">
                        <option value="Beaches">Beaches</option>
                        <option value="Mountains">Mountains</option>
                        <option value="Food">Food</option>
                        <option value="Cars">Cars</option>
                        <option value="Animals">Animals</option>
                        <option value="Architecture">Architecture</option>
                     </select>
                  </span>
                  {hasMessage
                  ? <span className="message">{validationMessage}</span>
                  : null
                  }
                  <input className="button-submit" type="submit" value="Add photo to website" />
               </p>
            </fieldset>
         </form>
      </section>
   );
};

export default AddPhoto;