import React from 'react';


const Images = ({ images }) => {
    return (
        <section className="tiles">
            {images.map((img) => (
            <article className="style1" key={img.id}>
                <span className="image">
                    <img src={img.url} alt="" />
                </span>
                <a href="/#">
                    <h2>{img.title}</h2>
                    <div className="content">
                        <p>ideas2code.io</p>
                    </div>
                </a>
            </article>
            ))}
        </section>
    )
}
export default Images;