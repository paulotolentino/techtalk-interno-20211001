import { useSelector, useDispatch } from "react-redux";
import useFavoriteEntities from "./customHook";

const FavoriteEntitiesSection = () => {
  const {
    favoriteEntities,
    currentEntityCanBeFavorite,
    saveCurrentEntity,
    removeEntity,
  } = useFavoriteEntities(true);
  const dispatch = useDispatch();

  const { currentEntity } = useSelector((state) => state);

  const handlePinEntityButtonClick = () => {
    saveCurrentEntity();
    dispatch({
      type: `newEntity/reset`,
    });
  };

  const handleRemoveEntity = (id) => {
    removeEntity(id);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    dispatch({
      type: `newEntity/${name}`,
      data: name === "id" ? Number(value) : value,
    });
  };

  return (
    <div className="container">
      <div className="input-area">
        <label htmlFor="id">ID</label>
        <input
          id="id"
          name="id"
          type="number"
          value={currentEntity.id}
          onChange={handleChange}
        />
        <label htmlFor="id">Name</label>
        <input
          id="name"
          name="name"
          value={currentEntity.name}
          onChange={handleChange}
        />
        <button
          disabled={!currentEntityCanBeFavorite}
          onClick={handlePinEntityButtonClick}
        >
          Pin Entity
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th colSpan={1} rowSpan={2}>
              ID
            </th>
            <th colSpan={1} rowSpan={2}>
              Name
            </th>
            <th colSpan={1} rowSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {favoriteEntities.map((entity) => (
            <tr key={entity.id}>
              <td>{entity.name}</td>
              <td>{entity.id}</td>
              <td>
                <button onClick={() => handleRemoveEntity(entity.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FavoriteEntitiesSection;
