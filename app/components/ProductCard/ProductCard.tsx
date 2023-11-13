import React from "react";
import type { Product } from "~/lib/interfaces";

import styles from "./styles.module.css";
import { Link } from "@remix-run/react";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className={styles["product-card"]}>
      <span className={styles["product-card__discount"]}>
        - {product.discountPercentage} %
      </span>
      <Link to={`/products/${product.id}`}>
        <img
          className={styles["product-card__image"]}
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
        />
      </Link>
      <div className={styles["product-card__info"]}>
        <Link to={`/products/${product.id}`}>
          <h4 className={styles["card-info__title"]}>{product.title}</h4>
        </Link>
        <p
          className={styles.description}
          title="3 lights lndenpant kitchen islang dining room pendant rice paper chandelier contemporary led pendant light modern chandelier"
        >
          {product.description.slice(0, 180)}
        </p>
        <div
          className={styles["card-info__rating"]}
          title="4.99"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(21, 21, 21) 0%, rgb(21, 21, 21) ${
              (product.rating * 100) / 5
            }%, rgb(204, 204, 204) ${(product.rating * 100) / 5}%)`,
          }}
        ></div>
      </div>
      <div className={styles["options"]}>
        <div className={styles["card-pricing"]}>
          <p className={styles["card-pricing__discounted"]}>
            {(
              (product.price * (100 - product.discountPercentage)) /
              100
            ).toFixed(2)}
          </p>
          <p className={styles["card-pricing__original"]}>$ {product.price}</p>
        </div>
        <div className={styles["card-buttons"]}>
          <button className={styles["button"]}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
