export async function registerUser(userID, userName, childName, age, gender) {
  return await fetch('https://server2019fixhelper.herokuapp.com/Register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Child_ID: 'C0003',
      Child_Information: childName,
      Child_Age: age,
      Score_ID: null,
      Type_ID_No_Frist: null,
      Type_ID_No_Second: null,
      Type_ID_No_Third: null,
      User_ID: userID,
      User_Information: userName,
      User_Profile: 'IMG',
    }),
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.message;
    })
    .catch(error => {
      // console.error(error);
      return 'Network Fielded';
    });
}

export async function Login(userID) {
  return await fetch('https://server2019fixhelper.herokuapp.com/Login/' + userID, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: '',
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      // console.error(error);
      return 'Network Fielded';
    });
}

export async function getAllUser() {
  return await fetch('https://server2019fixhelper.herokuapp.com/Accounts')
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.message;
    })
    .catch(error => {
      // console.error(error);
      return 'Network Fielded';
    });
}

export async function getTypeOnDB(TypeOne, TypeTwo, TypeThree) {
  return await fetch('https://server2019fixhelper.herokuapp.com/Types', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Type_ID_No_Frist: TypeOne,
      Type_ID_No_Second: TypeTwo,
      Type_ID_No_Third: TypeThree,
    }),
  })
    .then(response => response.json())
    .then(responseJson => {
      // console.warn(responseJson)
      return responseJson;
    })
    .catch(error => {
      // console.error(error);
      return 'error : ' + error;
    });
}

export async function InsertScore(scoreOne, scoreTwo, scoreThree, childID) {
  return await fetch('https://server2019fixhelper.herokuapp.com/ManageScore', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Score_Group_First: scoreOne,
      Score_Group_Second: scoreTwo,
      Score_Group_Third: scoreThree,
      Child_ID: childID,
    }),
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.message;
    })
    .catch(error => {
      return 'error : ' + error;
    });

  // {
  //   "Score_Group_First": 17,
  //       "Score_Group_Second": 15,
  //       "Score_Group_Third": 16,
  //       "Child_ID":"Ccd1ae1143"
  // }
}


export async function UpdateScore(scoreID,scoreOne, scoreTwo, scoreThree, childID) {
  return await fetch('https://server2019fixhelper.herokuapp.com/ManageScore/'+scoreID, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Score_Group_First: scoreOne,
      Score_Group_Second: scoreTwo,
      Score_Group_Third: scoreThree,
      Child_ID: childID,
    }),
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.message;
    })
    .catch(error => {
      return 'error : ' + error;
    });
}


export async function GetMyAccountType(Child_ID) {
  return await fetch('https://server2019fixhelper.herokuapp.com/Result/' + Child_ID, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: '',
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      // console.error(error);
      return 'Network Fielded';
    });
}


export async function GetHistory(Child_ID) {
  return await fetch('https://server2019fixhelper.herokuapp.com/Histpry/' + Child_ID, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: '',
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      // console.error(error);
      return 'Network Fielded';
    });
}


export async function DeleteAccount(childID, scoreID, userID) {
  return await fetch('https://server2019fixhelper.herokuapp.com/DeleteAccount', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ChildID:childID,
      ScoreID:scoreID,
      UserID:userID
    }),
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.message;
    })
    .catch(error => {
      return 'error : ' + error;
    });
}

export default {registerUser, Login, getAllUser, getTypeOnDB, InsertScore, GetMyAccountType, UpdateScore, GetHistory,DeleteAccount};
// export  {Login}
// export  {getAllUser}
