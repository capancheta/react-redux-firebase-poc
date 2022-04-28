export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const state = getState();
    const firestore = getFirestore();
    const email = state.firebase.auth.email;
    const authorId = state.firebase.auth.uid;

    firestore
      .collection('users')
      .doc(state.firebase.auth.uid)
      .get()
      .then((doc) => {
        const user = doc.data();
        firestore
          .collection('projects')
          .add({
            ...project,
            authorFirstName: user.firstName,
            authorLastName: user.lastName,
            authorId: authorId,
            createdAt: new Date(),
          })
          .then(() => {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
          })
          .catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
          });
      });
  };
};
