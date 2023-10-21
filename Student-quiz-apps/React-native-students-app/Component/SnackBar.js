import { Toast } from "native-base";

ShowSnackBar = (params,type) => {
   return Toast.show({
    text: ''+params,
    buttonText: "Okay",
    type: ''+type
  })
}

export default ShowSnackBar