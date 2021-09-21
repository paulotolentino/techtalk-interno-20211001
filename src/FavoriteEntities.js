export default class FavoriteEntities {
  initialState = [
    {
      id: 1,
      name: "Henrique Mamede",
    },
    {
      id: 2,
      name: "Paulo Eduardo",
    },
    {
      id: 3,
      name: "Paulo Sérgio",
    },
  ];
  state = [...this.initialState];

  fetchCurrent = async () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(this.state), 500);
    });

  someCleanupAction = () => {
    this.state = [...this.initialState];
  };

  addEntity = async (entity) =>
    new Promise((resolve) => {
      setTimeout(() => {
        this.state.push(entity);
        resolve(true);
      }, 50);
    });

  removeEntity = async (id) =>
    new Promise((resolve) => {
      setTimeout(() => {
        this.state = this.state.filter((entity) => entity.id !== id);
        resolve(true);
      }, 50);
    });
}
