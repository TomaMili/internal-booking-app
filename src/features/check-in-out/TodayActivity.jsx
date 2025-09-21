import { useTodayActivity } from "./useTodayActivity";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();

  return (
    <div
      className="
        bg-white border border-zinc-200 rounded-md 
        p-8 pt-6 flex flex-col gap-6 
        col-span-2
      "
    >
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-xl mb-3 ml-2">Today</h2>
      </div>

      {!isLoading ? (
        activities?.length > 0 ? (
          <ul className="overflow-y-scroll overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </ul>
        ) : (
          <p className="text-center text-lg font-medium mt-2">
            No activity today...
          </p>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default TodayActivity;
