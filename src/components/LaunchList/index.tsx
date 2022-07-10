import React, { FC } from "react";

import { useLaunchesQuery } from "../../generated/graphql";
import "./style.css";

const className = "LaunchList";

const LaunchList: FC<{ handleIdChange: (newId: number) => void }> = ({
  handleIdChange,
}) => {
  const { data, error, loading } = useLaunchesQuery();

  if (loading) return <div>Loading...</div>;

  if (error || !data) return <div>Error: {error?.message}</div>;

  return (
    <div className={className}>
      <h3>Launches</h3>
      <ol className={`${className}__list`}>
        {!!data.launches &&
          data.launches.map(
            (launch, i) =>
              !!launch && (
                <li
                  key={i}
                  className={`${className}__item`}
                  onClick={() => handleIdChange(launch.flight_number!)}
                >
                  {launch.mission_name} ({launch.launch_year})
                </li>
              )
          )}
      </ol>
    </div>
  );
};

export default LaunchList;
