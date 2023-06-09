import React from "react";
import firulaisImage from "../../img/perro prueba.jpg";
import styles from "../../Styles/newDog/newdog.module.css"

const NewDog = ({
  name,
  lifeSpan,
  weightMin,
  weightMax,
  heightMin,
  heightMax,
  temperaments,
  image,
}) => {
  return (
    <div className={styles.divGeneral}>
      <h2 className={styles.titleNewDog}>Card preview</h2>
      <div className={styles.containerNewDog}>
        <div className={styles.divImageTittle}>
          <div className={styles.divTitleCard}>
            {name ? (
              <h3 className={styles.titleCard}>{name}</h3>
            ) : (
              <h3 className={styles.titleCard}>Firulais</h3>
            )}
          </div>
          <div className={styles.divImageCard}>
            {image ? (
              <img src={image} className={styles.imageCard} />
            ) : (
              <img
                src={firulaisImage}
                alt="Firulais"
                className={styles.imageCard}
              />
            )}
          </div>
        </div>

        <div className={styles.divInfoDoble}>
          <div>
            <h4 className={styles.titleLifeSpan}>Life Span</h4>
            {lifeSpan ? (
              <p className={styles.pLifeSpan}>
                {lifeSpan} 
              </p>
            ) : (
              <p className={styles.pLifeSpan}>12 - 15 years</p>
            )}
          </div>

          <div>
            <h4 className={styles.titleWeight}>Weight</h4>
            {weightMin || weightMax ? (
              <p className={styles.pWeight}>
                {weightMin} - {weightMax} kg
              </p>
            ) : (
              <p className={styles.pWeight}>5 - 10kg</p>
            )}
          </div>

          <div>
            <h4 className={styles.titleHeight}>Height</h4>
            {heightMin || heightMax ? (
              <p className={styles.pHeight}>
                {heightMin} - {heightMax} cm
              </p>
            ) : (
              <p className={styles.pHeight}>20 - 30 cm</p>
            )}
          </div>
        </div>

        <div>
          <p className={styles.titleTemperaments}>Temperaments</p>
          {temperaments.length === 0 ? (
            <div className={styles.divItemsTemperaments}>
              <p className={styles.itemTemperament}>Friendly</p>
              <p className={styles.itemTemperament}>Docile</p>
              <p className={styles.itemTemperament}>Energetic</p>
              <p className={styles.itemTemperament}>Loyal</p>
            </div>
          ) : (
            <div className={styles.divItemsTemperaments}>
              {temperaments.map((temp) => (
                <p className={styles.itemTemperament}>{temp}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewDog;