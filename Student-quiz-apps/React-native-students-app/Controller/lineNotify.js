export async function SendLineNotify(
  UserName,
  ChildName,
  Age,
  TypeOne,
  TypeTwo,
  TypeThree,
) {
  return await fetch('https://notify-api.line.me/api/notify', {
    method: 'POST',
    headers: new Headers({
      Authorization: 'Bearer 4C6XRKQUaliCxGk2E4emP88AWkNSVDfNo3KEtYlRprf',
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
    body:
      'message= UserName: ' +
      UserName +
      '\nChildName: ' +
      ChildName +
      '\nGroup 1 : ' +
      TypeOne +
      '\nGroup 2 : ' +
      TypeTwo +
      '\nGroup 3 : ' +
      TypeThree +
      '\nDateTime : ' +
      new Date().getDate() +
      '/' +
      new Date().getMonth() +
      '/' +
      new Date().getFullYear(),
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.status;
    })
    .catch(error => {
      // console.error(error);
      return 'error : ' + error;
    });
}

export default SendLineNotify;
