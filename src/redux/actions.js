export const SET_ROLE_FILTER = "SET_ROLE_FILTER";
export const SET_EXPERIENCE_FILTER = "SET_EXPERIENCE_FILTER";
export const SET_COMPANY_NAME_FILTER = "SET_COMPANY_NAME_FILTER";
export const SET_MINIMUM_BASE_PAY_FILTER = "SET_MINIMUM_BASE_PAY_FILTER";

export const setMinimumBasePayFilter = (pay) => ({
  type: SET_MINIMUM_BASE_PAY_FILTER,
  payload: pay,
});

export const SET_LOCATION_FILTER = "SET_LOCATION_FILTER";
export const SET_REMOTE_FILTER = " SET_REMOTE_FILTER";

export const setRemoteFilter = (remote) => ({
  type: SET_REMOTE_FILTER,
  payload: remote,
});

export const setLocationFilter = (location) => ({
  type: SET_LOCATION_FILTER,
  payload: location,
});

export const setCompanyNameFilter = (companyName) => {
  console.log("Dispatching company filter:", companyName);
  return {
    type: SET_COMPANY_NAME_FILTER,
    payload: companyName,
  };
};
export const setRoleFilter = (role) => {
  console.log("Dispatching role filter:", role);
  return {
    type: SET_ROLE_FILTER,
    payload: role,
  };
};

export const setExperienceFilter = (experience) => {
  console.log("Dispatching experience filter:", experience);
  return {
    type: SET_EXPERIENCE_FILTER,
    payload: experience,
  };
};
