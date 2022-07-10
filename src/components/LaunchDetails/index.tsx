import React, { FC, useEffect } from "react";

import { useLaunchDetailsQuery } from "../../generated/graphql";
import LaunchDetails from "./LaunchDetails";

const LaunchDetailsWrapper: FC<{ id: number }> = ({ id }) => {
  const { data, error, loading, refetch } = useLaunchDetailsQuery({
    variables: { id: String(id) },
  });

  useEffect(() => {
    refetch({ id: String(id) });
  }, [refetch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <LaunchDetails data={data} />;
};

export default LaunchDetailsWrapper;
