import React from 'react'; import ThoughtList from '../components/ThoughtList'; import FriendList from '../components/FriendList'; import Auth from '../utils/auth'; import { useQuery } from '@apollo/client'; import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries'; const Home = () => { // use useQuery hook to make query request const { loading, data } = useQuery(QUERY_THOUGHTS); // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive const { data: userData } = useQuery(QUERY_ME_BASIC); const thoughts = data?.thoughts || []; console.log(thoughts); const loggedIn = Auth.loggedIn(); return (
  {loading ? (
  Loading...
  ) : ( )}
  {loggedIn && userData ? (
  ) : null}
  ); }; export default Home;