import {
  SET_ROLE_FILTER,
  SET_EXPERIENCE_FILTER,
  SET_COMPANY_NAME_FILTER,
  SET_MINIMUM_BASE_PAY_FILTER,
  SET_LOCATION_FILTER,
  SET_REMOTE_FILTER,
} from "./actions";

const initialState = {
  roleFilter: "",
  experienceFilter: "",
  companyNameFilter: "",
  minimumBasePayFilter: "",
  locationFilter: "",
  remoteFilter: "",
};

const jobFiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLE_FILTER:
      return {
        ...state,
        roleFilter: action.payload,
      };
    case SET_EXPERIENCE_FILTER:
      return {
        ...state,
        experienceFilter: action.payload,
      };
    case SET_COMPANY_NAME_FILTER:
      return {
        ...state,
        companyNameFilter: action.payload,
      };
    case SET_MINIMUM_BASE_PAY_FILTER:
      return {
        ...state,
        minimumBasePayFilter: action.payload,
      };
    case SET_LOCATION_FILTER:
      return {
        ...state,
        locationFilter: action.payload,
      };
    case SET_REMOTE_FILTER:
      return {
        ...state,
        remoteFilter: action.payload,
      };
    default:
      return state;
  }
};

export default jobFiltersReducer;
