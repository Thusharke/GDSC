import Head from "next/head";
import React from "react";
import { EventCard } from "../src/components/EventCard";
import { EventHero } from "../src/components/EventHero";
import { Footer } from "../src/components/Layouts/Footer";
import { Nav } from "../src/components/Layouts/Nav";

const eventList = [
  {
    title: "GDSC CVR Kickstart Event",
    description: `In this event we introduced the GDSC club and its members to the student community at CVR College Of Engineering and had an interactive informative session. At the end of this session we received more than 200 new admissions into the GDSC CVR chapter.`,
    date: "15 Sept 2021",
    time: "11:00 am",
    watchUrl: "",
    speakers:
      "Srimanth Tenneti, Vedanvita Gudavalli, Thushar KE, Sandeep Prabhakula, Annam DevikaLahari, Vaishnavi Tammali",
    registerUrl: "",
  },
  {
    title: "Introduction to 30 days of google cloud",
    description: `After the launch of the 30 Days of Google Cloud program many students reached out to the team asking fro help help with the program. So, we conducted an online webinar on Bevy helping students understand the program and solved their issues.`,
    date: "02 Nov 2021",
    time: "6:00 pm",
    watchUrl: "https://youtu.be/A20gz5vF0Ss",
    speakers: "Adil Shaik, Vaishnavi Tammali",
    registerUrl: "",
  },
  {
    title: "GDSC CVR World of Women kickstart",
    description: `Analysing the registration data and the session check in data we understood that the participation from girls was very less. Hence, to encourage and motivate them, our WOW team conducted a session informing them about the benefits of GDSC and the help they would be able to receive from the team. `,
    date: "16 Oct 2021",
    time: "5:30 PM",
    watchUrl: "https://youtu.be/oawV72PZntA",
    speakers: "Annam DevikaLahari, Vaishnavi Tammali, Pinjarala Renu",
    registerUrl: "",
  },
  {
    title: "Day 1: Introduction to Web Technologies",
    description: `To help the students at CVR College of Engineering learn Web Development the GDSC’s web development team started a 3-day webinar from 18th - 20th October, from 7PM - 9PM. This event taught the students vital concepts like Git, HTML, CSS, Javascript and helped them implement 2 projects.`,
    date: "18 Oct 2021",
    time: "7:00 pm",
    watchUrl: "https://youtu.be/uX-58cfjVw4",
    speakers: "Adil Shaik, Thushar KE, Hari Karthik",
    registerUrl: "",
  },
  {
    title: "Day 2: Introduction to Web Technologies",
    description: `To help the students at CVR College of Engineering learn Web Development the GDSC’s web development team started a 3-day webinar from 18th - 20th October, from 7PM - 9PM. This event taught the students vital concepts like Git, HTML, CSS, Javascript and helped them implement 2 projects.`,
    date: "19 Oct 2021",
    time: "7:00 pm",
    speakers: "Adil Shaik, Thushar KE, Hari Karthik",
    watchUrl: "https://youtu.be/uX-58cfjVw4",
    registerUrl: "",
  },
  {
    title: "Day 3: Introduction to Web Technologies",
    description: `To help the students at CVR College of Engineering learn Web Development the GDSC’s web development team started a 3-day webinar from 18th - 20th October, from 7PM - 9PM. This event taught the students vital concepts like Git, HTML, CSS, Javascript and helped them implement 2 projects.`,
    date: "20 Oct 2021",
    speakers: "Adil Shaik, Thushar KE, Hari Karthik",
    time: "7:00 pm",
    watchUrl: "https://youtu.be/uX-58cfjVw4",
    registerUrl: "",
  },
  {
    title: "Training by Cyrrup Solutions",
    description: `To help students community to have exposure on technical field, so our collaboration is conduction a training to all the students on Web Development and will be offer students to work on real life project.`,
    date: "08 Nov 2021",
    time: "10:00 am",
    speakers: "Cyrrup experts",
    watchUrl: "",
    registerUrl: "",
  },
];

const events: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>GDSC | Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="pt-24 w-full">
        <EventHero />
        <EventCard content={eventList} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default events;
