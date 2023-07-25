import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const createUserPromise = createUser();
  Promise.all([photoPromise, createUserPromise]).then((data) => {
    console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
  });
}
