import { loginSuccess } from "./actions";

const initialState = {
  user: {
    about: "",
  },
  skills: [],
  education: [],
  experience: [],

};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SKILL":
      return {
        ...state,
        skills: [...state.skills, action.payload.skill],
      };
    case "DELETE_SKILL":
      return {
        ...state,
        skills: state.skills.filter((_, index) => index !== action.payload.index),
      };
    case "ADD_EDUCATION":
      return {
        ...state,
        education: [...state.education, action.payload.education],
      };
    case "DELETE_EDUCATION":
      return {
        ...state,
        education: state.education.filter((_, index) => index !== action.payload.index),
      };
      case "UPDATE_ABOUT":
        return {
          ...state,
          user: {
            ...state.user,
            about: action.payload.about,
          },
        };
      case "ADD_EXPERIENCE":
        return {
          ...state,
          experience: [...state.experience, action.payload.experience],
        };
      case "DELETE_EXPERIENCE":
        return {
          ...state,
          experience: state.experience.filter((_, index) => index !== action.payload.index),
        };

    default:
      return state;
  }
};

export default profileReducer;