
export const loginSuccess = () => ({
  type: "LOGIN_SUCCESS",
});

export const updateAbout = (about) => {
  return {
    type: "UPDATE_ABOUT",
    payload: { about },
  };
};


export const addSkill = (skill) => {
  return {
    type: "ADD_SKILL",
    payload: {  'skill' : skill },
  };
};

export const deleteSkill = (index) => {
  return {
    type: "DELETE_SKILL",
    payload: { index },
  };
};

export const addEducation = (education) => {
  return {
    type: "ADD_EDUCATION",
    payload: { education },
  };
};

export const deleteEducation = (index) => {
  return {
    type: "DELETE_EDUCATION",
    payload: { index },
  };
};

export const addExperience = (experience) => {
  return {
    type: "ADD_EXPERIENCE",
    payload: { experience },
  };
};

export const deleteExperience = (index) => {
  return {
    type: "DELETE_EXPERIENCE",
    payload: { index },
  };
};