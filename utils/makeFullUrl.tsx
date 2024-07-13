import { API_URL, SERVER_URL } from "../constants/domains"

export const makeFullUrl = (suffixUrl: string) => {
    return SERVER_URL + (suffixUrl || "")
}

export const makeFullApiUrl = (suffixUrl: string) => {
  console.log(API_URL + (suffixUrl || ""))
    return API_URL + (suffixUrl || "")
}