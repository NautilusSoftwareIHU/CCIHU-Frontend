import styles from "./Matches.module.css";

const Matches = ({ listItems, searchTerm, width, minHeight, renderMethod }) => {
  return (
    <div
      className={styles.container}
      style={{
        width: width || null,
        minHeight: minHeight || null,
      }}
    >
      {listItems ? (
        (searchTerm && searchTerm.length > 0
          ? listItems.filter((item) =>
              item.username.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : listItems
        ).map((item) => (
          <div key={item.id} className={styles.match}>
            {renderMethod ? renderMethod(item) : null}
          </div>
        ))
      ) : (
        <p className={styles.match}>No items found.</p>
      )}
    </div>
  );
};

export default Matches;
