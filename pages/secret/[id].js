import AdminSecretHeader from "../../src/components/Headers/AdminSecretHeader";

function Secret({ participants, hasDrew, isAdmin }) {
  return <>{isAdmin && <AdminSecretHeader />}</>;
}

export async function getServerSideProps(context) {
  return {
    props: {
      participants: [],
      hasDrew: false,
      isAdmin: true,
    },
  };
}

export default Secret;
