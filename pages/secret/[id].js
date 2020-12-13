import { useState, useEffect } from "react";
import AdminSecretHeader from "../../src/components/Headers/AdminSecretHeader";
import SecretHeader from "../../src/components/Headers/SecretHeader";
import Participants from "../../src/components/Participants";
import Sort from "../../src/components/Sort";

function Secret({ participants, hasDrew, isAdmin }) {
  const [localParticipants, setLocalParticipants] = useState([]);

  useEffect(() => {
    setLocalParticipants(participants);
  }, []);

  return (
    <>
      {isAdmin && <AdminSecretHeader />}
      {!isAdmin && (
        <SecretHeader
          onAddParticipant={(participant) =>
            setLocalParticipants([...localParticipants, participant])
          }
        />
      )}
      <Participants
        showButton={isAdmin}
        participants={localParticipants}
        setParticipants={setLocalParticipants}
      />
      {isAdmin && <Sort hasDrew={hasDrew} />}
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await getSecretById(context.query);

  return {
    props: { ...data, ...context.query },
  };
}

async function getSecretById({ id, adminKey }) {
  const { NEXT_PUBLIC_API_URL } = process.env;
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/secret/${id}`, {
    method: "GET",
    headers: new Headers({
      "admin-key": adminKey,
    }),
  });
  return response.json();
}

export default Secret;
