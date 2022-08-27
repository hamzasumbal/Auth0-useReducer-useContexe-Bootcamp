import React, { useReducer } from "react";

export const UserContext = React.createContext();

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case "test": {
      return {
        test: "successful",
      };
    }

    case "set-user": {
      return {
        email: action.email,
        picture: action.picture,
        name: action.name,
        university: action.university,
      };
    }

    case "update-university": {
      return {
        ...state,
        university: action.university,
      };
    }

    default:
      throw new Error("Unrecoginzed action type");
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const testFunction = () => {
    const action = {
      type: "test",
    };

    dispatch(action);
  };

  const createUserAndRecieveInfo = async (user) => {
    //POST fetch call here.
    /* const  body = {
                email : user.email,
                name : user.name,
                picture: user.picture
        } */

    // 1. If the user already exist, send back the user project from the database.
    // 2. If user does not exist, create a new user and send back the user object from the database.

    const action = {
      type: "set-user",
      email: user.email,
      name: user.name,
      picture: user.picture,
      university: "McGill",
    };

    dispatch(action);
  };

  const updateUniversity = async (newUniversityName) => {
    // fetch patch/put
    // newUniversityName as params or body.

    const action = {
      type: "update-university",
      university: newUniversityName,
    };
    dispatch(action);
  };

  const addInterests = async (interests) => {
    // fetch post (/api/add-interests)
    // send all the interests in body

    const action = {
      type: "add-interests",
      interests: interests,
    };

    dispatch(action);
  };

  return (
    <UserContext.Provider
      value={{
        state,
        actions: {
          createUserAndRecieveInfo,
          testFunction,
          updateUniversity,
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
