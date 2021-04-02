import * as photoService from '../../services/photoServise';
import "./AddPhoto.css";

const AddPhoto = ({
    history
}) => {

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const { imageURL, description, category } = e.target;

        photoService.addPhoto(imageURL, description, category)
            .then(() => {
                history.push('/');
            })
            .catch(err => console.log(err));
    };

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
                        <input className="button-submit" type="submit" value="Add photo to our collection" />
                    </p>
                </fieldset>
            </form>
        </section>
    );
};

export default AddPhoto;