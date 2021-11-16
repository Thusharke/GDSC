import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Heading } from "../src/components/Heading";
import { Footer } from "../src/components/Layouts/Footer";
import { Nav } from "../src/components/Layouts/Nav";
import { TeamCard } from "../src/components/TeamCard";
import axios from "axios";
const people = [
  {
    name: "Srimanth Tenneti",
    role: "Community Lead & Machine Learning Lead",
    imageUrl: "/team/SrimanthTenneti.jpg",
    bio: `A 20 y/o Hardware Designer and Software Developer, I have a knack for designing Digital Systems using Verilog HDL and have worked with protocols like AXI, AXI - Lite, AXI - Stream, AHB, AHB - Lite, UART, SPI. I also have a good grasp on SOC design and am proficient with RISC-based CPU design. I've worked with various microcontroller units like STM32, MSP430, TIVA Series, Arduino, AVR Tiny Series and can develop a bare-metal code.`,
    instagramUrl: "https://www.instagram.com/srimanth_tenneti/",
    githubUrl: "https://github.com/srimanthtenneti",
    linkedinUrl: "https://www.linkedin.com/in/srimanth-tenneti-662b7117b/",
  },
  {
    name: "Vaishnavi Tammali",
    role: "Corporate Outreach Lead",
    imageUrl: "/team/vaishnavi.jpeg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    instagramUrl: "#",
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "P Renu",
    role: "Content Lead",
    imageUrl: "/team/renu.png",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    instagramUrl: "https://www.instagram.com/Pinjaralarenu/",
    githubUrl: "#",
    linkedinUrl: "https://www.linkedin.com/mwlite/in/pinjarala-r-4926581a5",
  },
  {
    name: "Sirichandan Reddy",
    role: "Management Lead",
    imageUrl: "/team/sirichandanreddy.JPG",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    instagramUrl: "#",
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Vedanvita Gudavalli",
    role: "Strategies and Outreach Lead",
    imageUrl: "/team/vedanvitagudavalli.jpg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    instagramUrl: "https://www.instagram.com/vedanvita_/",
    githubUrl: "https://github.com/Vedanvita",
    linkedinUrl: "http://www.linkedin.com/in/vedanvita-gudavalli-bb58971a7",
  },
  {
    name: "S Preetham Reddy",
    role: "Student Relations Lead",
    imageUrl: "/team/PreethamReddy.jpg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    instagramUrl: "#",
    githubUrl: "https://github.com/Preetham71",
    linkedinUrl: "https://www.linkedin.com/in/preetham-r-755128129",
  },
  {
    name: "Jannaikode Yashwanth Kumar",
    role: "Strategies and Operations Lead",
    imageUrl: "/team/yashwanth.jpg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    instagramUrl: "https://instagram.com/yashwanth_24_12?utm_medium=copy_link",
    githubUrl: "https://github.com/Yashwanth-Kumar24",
    linkedinUrl: "https://www.linkedin.com/in/yashwanthkj",
  },
  {
    name: "Annam DevikaLahari",
    role: "Women Empowerment Lead",
    imageUrl: "/team/lahari.jpeg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    instagramUrl: "https://www.instagram.com/_lahari09_/",
    githubUrl: "https://github.com/L09-c",
    linkedinUrl: "https://www.linkedin.com/in/lahari-annam-76b0a9192",
  },
  {
    name: "Thushar KE",
    role: "Web Development Lead",
    imageUrl: "/team/thushar.jpg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    instagramUrl: "https://www.instagram.com/thusharke25/",
    githubUrl: "https://github.com/thusharke",
    linkedinUrl: "https://www.linkedin.com/in/thushar-ke-b00ba51a0/",
  },
  {
    name: "Shaik Adil",
    role: "GCP Facilitator & Web development core team",
    imageUrl: "/team/adil.jpeg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    instagramUrl: "https://www.instagram.com/_adilshaik/",
    githubUrl: "https://github.com/adilshaik",
    linkedinUrl: "https://www.linkedin.com/in/adil-shaik-7497a01b1/",
  },
  {
    name: "Karthik Pavoor ",
    role: "Wed development core team",
    imageUrl: "/team/karthikpavoor.jpg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    instagramUrl: "https://www.instagram.com/k_a_r_t_h_i_k_01/",
    githubUrl: "https://github.com/karthikpavoor",
    linkedinUrl: "https://www.linkedin.com/in/karthik-pavoor-73331b21a/",
  },
  {
    name: "Rishi Shreshtham",
    role: "Machine Learning core team",
    imageUrl: "/team/rishishrestham.jpeg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    instagramUrl: "https://www.instagram.com/rishi_shreshtham/",
    githubUrl: "https://github.com/fluire",
    linkedinUrl: "http://www.linkedin.com/in/rishi-shrestham-98a6231a9",
  },
  {
    name: "Hari Sri Purna Vishnu Karthik",
    role: "Machine Learning core team",
    imageUrl: "/team/harikarthik.jpeg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    instagramUrl: "https://www.instagram.com/hks3npai/",
    githubUrl: "https://github.com/hksenpai",
    linkedinUrl: "https://www.linkedin.com/in/hari-karthik-46477b1b3/",
  },
  {
    name: "S Abhinav",
    role: "Machine Learning core team",
    imageUrl: "/team/Abhinav.png",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    instagramUrl: "https://www.instagram.com/abhinavsam_03/",
    githubUrl: "https://github.com/sabhinav3",
    linkedinUrl: "https://www.linkedin.com/in/s-abhinav/",
  },
  {
    name: "Pisati Sai Charan Reddy",
    role: "Machine Learning core team",
    imageUrl: "/team/Pisati.JPG",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    instagramUrl: "https://github.com/saicharanreddypisati",
    githubUrl: "https://github.com/Wolfenstein31",
    linkedinUrl: "http://linkedin.com/in/pisati-sai-charan-reddy-a41596205",
  },
  {
    name: "Sandeep P",
    role: "Android Lead",
    imageUrl: "/team/sandeepprabhakula.jpg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    instagramUrl: "https://instagram.com/sandeepo9o7",
    githubUrl: "https://github.com/sandeep-prabhakula",
    linkedinUrl: "https://www.linkedin.com/in/sandeep-prabhakula-791769202",
  },
  {
    name: "Nimma Likhitha",
    role: "Android core team",
    imageUrl: "/team/LikhithaNimma.jpeg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    instagramUrl: "https://www.instagram.com/likhitha_n_reddy/",
    githubUrl: "https://github.com/likhithanimma",
    linkedinUrl: "https://www.linkedin.com/in/likhithanimma/",
  },
];

const team: React.FC = () => {
  const [people, setPeople] = useState(undefined);

  const grabData = async () => {
    const { data } = await axios.get("/");
    console.log(data);
  };

  useEffect(() => {
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
