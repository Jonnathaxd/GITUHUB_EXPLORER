import { useContext, useEffect } from "react";
import PublicLayout from "../layouts/PublicLayout/";
import { Context } from "../contexts/Context";
import RepositoryList from "../components/RepositoryList";

const UserPage = () => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    console.log(state);
  }, []);
  return (
    <PublicLayout>
      <RepositoryList />
    </PublicLayout>
  );
};

export default UserPage;
