import styles from "./Matches.module.css";

const Matches = ({ listItems, searchTerm, width, minHeight }) => {
  return (
    <div
      className={styles.container}
      style={{
        width: width ? width : null,
        minHeight: minHeight ? minHeight : null,
      }}
    >
      {listItems ? (
        (searchTerm.length > 0
          ? listItems.filter((item) =>
              item.username.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : listItems
        ).map((item) => {
          return (
            <div key={item.id} className={styles.match}>
              <h4>{item.username}</h4>
              <p>{item.review}</p>
              <p>Rating: {item.rating}/5</p>
            </div>
          );
        })
      ) : (
        <p className={styles.match}>No items found.</p>
      )}
    </div>
  );
};

export default Matches;
