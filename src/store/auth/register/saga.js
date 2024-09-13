import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { REGISTER_USER } from "./actionTypes";
import { registerUserSuccessful, registerUserFailed } from "./actions";
import { postRegister } from "../../../helpers/backend_helper";


function* registerUser({ payload: { user } }) {
  try {
    const response = yield call(postRegister, user);
    toast.success(response.message, { autoClose: 3000 });
    yield put(registerUserSuccessful(response));
  } catch (error) {
    toast.error(error.message, { autoClose: 3000 });
    yield put(registerUserFailed(error));
  }
}


export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser);
}


function* accountSaga() {
  yield all([
    fork(watchUserRegister),
  ]);
}

export default accountSaga;
