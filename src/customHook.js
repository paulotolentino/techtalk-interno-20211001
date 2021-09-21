import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import FavoriteEntitiesClass from "./FavoriteEntities";
export default function useFavoriteEntities(loadAtMount = true) {
  const [favoriteEntities, setFavoriteEntities] = useState([]);
  const [currentEntityCanBeFavorite, setCurrentEntityCanBeFavorite] =
    useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const FavoriteEntities = useMemo(() => new FavoriteEntitiesClass(), []);
  const { currentEntity } = useSelector((state) => state);

  const refreshFavoriteEntities = useCallback(() => {
    if (!isRefreshing) {
      setIsRefreshing(true);
      FavoriteEntities.fetchCurrent()
        .then((e) => {
          setFavoriteEntities(e);
        })
        .finally(() => setIsRefreshing(false));
    } /* eslint-disable-next-line */
  }, [isRefreshing]);

  useEffect(() => {
    if (loadAtMount) {
      refreshFavoriteEntities();
    }
    return () => {
      FavoriteEntities.someCleanupAction();
    }; /* eslint-disable-next-line */
  }, []);

  useEffect(() => {
    const canBeFavorite =
      favoriteEntities.every((item) => item.id !== currentEntity.id) &&
      currentEntity.id !== null &&
      currentEntity.name !== "";
    setCurrentEntityCanBeFavorite(canBeFavorite);
  }, [favoriteEntities.length, favoriteEntities, currentEntity]);

  const saveCurrentEntity = () => {
    if (currentEntityCanBeFavorite) {
      FavoriteEntities.addEntity(currentEntity).then(refreshFavoriteEntities);
    }
  };

  const removeEntity = (id) => {
    FavoriteEntities.removeEntity(id).then(refreshFavoriteEntities);
  };

  return {
    favoriteEntities,
    refreshFavoriteEntities,
    currentEntityCanBeFavorite,
    saveCurrentEntity,
    removeEntity,
  };
}
