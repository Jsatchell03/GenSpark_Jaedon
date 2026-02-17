import React, { useState } from "react";
import Outcome from "./Outcome";
import SelectedOutcome from "./SelectedOutcome";
export default function Outcomes() {
  const [selectedOutcome, setSelectedOutcome] = useState(null);
  const list = [
    {
      title: "Morning Workout",
      description: "Woke up early, hit the gym, and felt energized all day.",
      goodDay: true,
      rating: 8.5,
    },
    {
      title: "Missed the Bus",
      description: "Overslept and had to walk in the rain to get to class.",
      goodDay: false,
      rating: 2.8,
    },
    {
      title: "Productive Study Session",
      description:
        "Finished all my assignments and finally understood recursion.",
      goodDay: true,
      rating: 9.1,
    },
    {
      title: "Argument with a Friend",
      description: "Had a pointless disagreement that ruined the mood.",
      goodDay: false,
      rating: 4.0,
    },
    {
      title: "Internship Interview",
      description:
        "The interview went smoothly and I felt confident answering questions.",
      goodDay: true,
      rating: 8.9,
    },
    {
      title: "All-Nighter",
      description:
        "Stayed up way too late debugging and felt exhausted the next day.",
      goodDay: false,
      rating: 3.7,
    },
    {
      title: "Game Night",
      description: "Played games with friends and laughed the entire evening.",
      goodDay: true,
      rating: 9.4,
    },
    {
      title: "Got Sick",
      description: "Woke up with a fever and had to cancel all my plans.",
      goodDay: false,
      rating: 2.3,
    },
  ];

  return (
    <>
      {list.map((outcome, index) => {
        return (
          <Outcome
            outcome={outcome}
            key={index}
            onClick={() => setSelectedOutcome(outcome)}
          />
        );
      })}
      {selectedOutcome != null && <SelectedOutcome outcome={selectedOutcome} />}
    </>
  );
}
