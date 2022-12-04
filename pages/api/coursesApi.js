import { publicRequest } from "./requestMethods";

export default function coursesApi(props) {
    publicRequest.get("course/")
        .then(res => {
            console.log(res.data)
            props?.setCourses(res.data.slice(0, 12))
        })
        .catch(err => console.log(err))
}