/**
 * Author: Samuel Smith
 * Course: CRTY 1033
 * Instructor: Jill Ejdrygiewicz
 * Due Date: February 6th, 2024
 * 
 * Ignore this, not in use. not related to assignment
 */
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error)

  return (
    <div className='error-page'>
      <h1>Sorry,</h1>
      <p>an unexpected error has occured.</p>
      <p><i>{error.statusText || error.message}</i></p>
    </div>
  );
}