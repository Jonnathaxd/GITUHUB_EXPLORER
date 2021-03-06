import { useContext, useEffect } from "react";
import FormHome from "../components/FormHome";
import PublicLayout from "../layouts/PublicLayout/";
import { Context } from "../contexts/Context";

const HomePage = () => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    console.log(state);
  }, []);
  return (
    <PublicLayout>
      <FormHome />
    </PublicLayout>
  );
};

export default HomePage;
