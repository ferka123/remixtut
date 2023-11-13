import React from "react";
import type { Product } from "~/lib/interfaces";

import styles from "./styles.module.css";
import { useNavigate } from "@remix-run/react";

const FullCard: React.FC<{ product: Product }> = ({ product }) => {
  const nav = useNavigate();
  const [imageIndex, setImageIndex] = React.useState(0);
  return (
    <>
      <button className={styles["button"]} onClick={() => nav(-1)}>
        Back
      </button>
      <div className={styles["full-card"]}>
        <span className={styles["product-card__discount"]}>
          - {product.discountPercentage} %
        </span>
        <div style={{ width: "50%" }}>
          <img
            className={styles["full-image"]}
            src={product.images[imageIndex]}
            alt={product.title}
            loading="lazy"
          />
          <div className={styles["thumbs"]}>
            {product.images.map((image, index) => (
              <img
                key={index}
                className={
                  styles["thumb"] +
                  (imageIndex === index ? " " + styles["selected"] : "")
                }
                src={image}
                alt={product.title + index}
                loading="lazy"
                onClick={() => setImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles["product-card__info"]}>
            <h4 className={styles["card-info__title"]}>{product.title}</h4>
            <p
              className={styles["full-desc"]}
              title="3 lights lndenpant kitchen islang dining room pendant rice paper chandelier contemporary led pendant light modern chandelier"
            >
              {product.description.slice(0, 180)}
            </p>
            <div className={styles["addinfo"]}>
              <p>Category:</p>
              <p>{product.category}</p>
              <p>Brand:</p>
              <p>{product.brand}</p>
              <p>Stock:</p>
              <p>{product.stock}</p>
            </div>
            <div
              className={styles["card-info__rating"]}
              title="4.99"
              style={{
                backgroundImage: `linear-gradient(to right, rgb(21, 21, 21) 0%, rgb(21, 21, 21) ${
                  (product.rating * 100) / 5
                }%, rgb(204, 204, 204) ${(product.rating * 100) / 5}%)`,
              }}
            >
              d
            </div>
          </div>
          <div className={styles["options"]}>
            <div className={styles["card-pricing"]}>
              <p className={styles["card-pricing__discounted"]}>
                {(
                  (product.price * (100 - product.discountPercentage)) /
                  100
                ).toFixed(2)}
              </p>
              <p className={styles["card-pricing__original"]}>
                $ {product.price}
              </p>
            </div>
            <div className={styles["card-buttons"]}>
              <button className={styles["button"]}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullCard;
