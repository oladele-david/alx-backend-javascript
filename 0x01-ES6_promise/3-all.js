import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
    return Promise.all([createUser(), uploadPhoto()])
    .then((results) => {
        console.log(`${results[0].body} ${results[1].firstname} ${results[1].lastname}`);
    })
    .catch(() => console.log('Signup system offline'));
}
