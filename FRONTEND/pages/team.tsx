import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Heading } from "../src/components/Heading";
import { Footer } from "../src/components/Layouts/Footer";
import { Nav } from "../src/components/Layouts/Nav";
import { TeamCard } from "../src/components/TeamCard";
import axios from "axios";

const team: React.FC = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const grabData = async () => {
      const { data } = await axios.get("http://127.0.0.1:5000/api/team");
      setPeople(data);
    };
    grabData();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>GDSC | Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <div className="bg-white">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <Heading
              heading="Our Team"
              description="A team that is extremely innovative and always on toes when it comes to
        managing and organising an event that can help the student community in
        their technical endeavours."
            />
            <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
                >
                  {people &&
                    people.map((person) => (
                      <li key={person.name}>
                        <TeamCard person={person} />
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default team;
