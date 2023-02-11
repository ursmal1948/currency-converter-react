import "./style.css";

const Section = ({ title, body }) => (

    <section className="form__section">
        <label className="form__label">
            <span className="form__labelText"> {title}</span>
            <div>
                {body}
            </div>
        </label>

    </section>
)
export default Section;

