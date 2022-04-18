const UPDATE_PHOTOS_SUCCESS = 'galleryReducer/UPDATE_PHOTOS_SUCCESS';
export const UPDATE_PHOTOS = 'galleryReducer/UPDATE_PHOTOS';
const SET_IS_FETCHING = 'galleryReducer/SET_IS_FETCHING';

const initialState = {
  categories: {
    1: {
      photos: null,
    },
    2: {
      photos: null,
    },
    3: {
      photos: null,
    },
    4: {
      photos: null,
    },
  },
  isFetching: false,
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PHOTOS_SUCCESS:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.albumId]: {
            photos: action.photos,
          },
        },
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const updatePhotosSuccess = (albumId, photos) => {
  return { type: UPDATE_PHOTOS_SUCCESS, albumId, photos };
};

export const updatePhotos = (albumId) => ({ type: UPDATE_PHOTOS, albumId });

export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});

export default galleryReducer;
