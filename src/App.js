import React, { useEffect, useState } from "react";
import "./App.css";
import {
  createStyles,
  Tabs,
  SimpleGrid,
  Card,
  Image,
  Group,
  Text,
  Box,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  tab: {
    cursor: "pointer",
    fontSize: "24px",
    backgroundColor: "#fff",
    marginBottom: "21px",
    border: "none",
    "&[data-active]": {
      borderBottom: "3px solid #228cd5",
    },
  },
  panel: {
    marginTop: "29px",
  },
}));

function App() {
  const [leagueIn, setLeagueIn] = useState(1);
  const league_in_titles = ["In the News", "Press"];

  const { classes } = useStyles();
  useEffect(() => {
    setLeagueIn(0);
  }, []);

  const newsItems = [
    {
      image: "startupinfo.png",
      category: "press",
      title:
        "Enterprise League, Building the Fastest Growing Business Platform for Companies",
      description:
        "That’s why it is important to optimize the way we gather and analyze user feedback. When creating our feedback forms, we focus on addressing",
    },
    {
      image: "business-insider-logo.png",
      category: "featured",
      title: "Best online business communities",
      description:
        "Enterprise League is a platform that connects SMEs, enabling them to find business partnerships and collaborations. The Al-powered online platform allows",
    },
    {
      image: "classicinformatics.png",
      category: "press",
      title: "Best Business Apps",
      description:
        "Irina Georgieva, Co-Founder & CEO of Enterprise League tells that ‘Enterprise League’ is the fastest growing business platform for startups and SMEs",
    },
    {
      image: "startup.png",
      category: "press",
      title: "Top 101 small and medium businesses and startups",
      description:
        "At Enterprise League, we are passionate about helping people improve the way they do business. We are on a mission to help millions of entrepreneurs expand",
    },
    {
      image: "uknews.png",
      category: "press",
      title:
        "Business platform Enterprise League sees unprecedented user growth",
      description:
        "Enterprise League is extremely proud to share such results particularly since it is facilitating the way companies collaborate during these difficult times",
    },
    {
      image: "umi.png",
      category: "featured",
      title: "Startup Stories: Enterprise League",
      description:
        "Enterprise League (EL) is a B2B platform for SMEs. Through EL’s platform, small businesses can advertise what their value offerings are for free and search for",
    },
    {
      image: "upgrade.png",
      category: "press",
      title: "5 Cost effective ways to scale up your business",
      description:
        "Many entrepreneurs around the world are under constant pressure to scale up their businesses. They repeatedly receive different bits of advice from both",
    },
    {
      image: "upjourney.png",
      category: "press",
      title: "How to Stop Feeling Overwhelmed at Work (121 Powerful Tips)",
      description:
        "At some point, you must realize that you need to change something if you want to keep your health and sanity, and still succeed with your business. ",
    },
    {
      image: "prmoment.png",
      category: "press",
      title: "Reasons to be Cheerful about Brexit",
      description:
        "We are expecting to fare even better as there will be an increasing need to connect EU and UK SMEs to work together. As we are breaking walls",
    },
    {
      image: "globalapptesting.png",
      category: "press",
      title: "Time Management Techniques from CTOs",
      description:
        "As a CTO the most important things for me are the productivity & efficiency of my team. Considering the fast-paced & information-saturated world we live in, ",
    },
    {
      image: "cydomedia.png",
      category: "press",
      title:
        "3 Entrepreneurs provide advice on leading teams with remote employees",
      description:
        "At Enterprise League, people are our most valuable resources. Their contribution helps us keep the business",
    },
    {
      image: "tech-round-logo.png",
      category: "featured",
      title:
        "Interview with Irina Georgieva, Co-founder and CEO of Enterprise League",
      description:
        "We can expect to see Enterprise League to play a significant part in helping businesses out of the crisis caused by the pandemic. Many companies will",
    },
    {
      image: "harmonizelyblog.png",
      category: "press",
      title: "10+ insightful tips for new managers",
      description:
        "In order to unleash your employees’ full potential, you must give them responsibilities. Allocate each employee processes which they own and manage",
    },
    {
      image: "usco.png",
      category: "press",
      title: "Ways to cut overhead costs",
      description:
        "Review your marketing mix [and] compare how much you are spending and gaining from each channel. If, for example, you are investing a lot in PR",
    },
    {
      image: "mycorporation.png",
      category: "press",
      title: "Work from home outfit",
      description:
        "A simple day dress is my to-go WFH outfit. It is easy to wear, and often very comfortable for long hours spent sitting on a desk. The main reasoning behind",
    },
    {
      image: "welivetobuild.png",
      category: "press",
      title: "CEO Interview - Irina Georgieva",
      description:
        "The original idea was to bring more business opportunities to small companies around the world by giving them direct access to potential",
    },
    {
      image: "carolroth.png",
      category: "press",
      title: "Positive Mindset Tips for Small Business",
      description:
        "Focus on the things/aspects of your work that you can control. Be rational, put your energy towards identifying ways you can adapt",
    },
    {
      image: "workclub.png",
      category: "press",
      title: "Future of Works Interview - Irina Georgieva",
      description:
        "Our goal has been to be very agile in terms of our employee performance and their processes. Thus we introduced monthly",
    },
    {
      image: "beyourown.png",
      category: "press",
      title: "Business Education for female entrepreneurs",
      description:
        "The number of female entrepreneurs has been on the rise in recent years and now more than ever women are aspiring to",
    },
    {
      image: "femfounder.png",
      category: "press",
      title:
        "From a communist country to a London entrepreneur, a female founder's journey with Irina Georgieva",
      description:
        "Her company's mission is to empower small businesses to grow by enabling them to find new business opportunities quick",
    },
  ];

  return (
    <div className="App">
      <div className="page-header">
        <span className="gray-text">Enterprise League </span>
        <span className="blue-text">{league_in_titles[leagueIn]}</span>
      </div>
      <Tabs
        mt={40}
        unstyled={true}
        defaultValue="0"
        onTabChange={setLeagueIn}
        classNames={{
          tab: classes.tab,
          panel: classes.panel,
        }}
      >
        <Tabs.List position="center">
          <Tabs.Tab value="0">{league_in_titles[0]}</Tabs.Tab>
          <Tabs.Tab value="1">{league_in_titles[1]}</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="0">
          <SimpleGrid
            cols={3}
            spacing="xl"
            breakpoints={[
              { maxWidth: 980, cols: 2, spacing: "md" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
            mx="10%"
          >
            {newsItems.map((newsItem, index) => (
              <Card key={index} shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                  <Box m={12} p={21}>
                    <Image
                      src={
                        "https://enterpriseleague.com/public/img/" +
                        newsItem.category +
                        "/" +
                        newsItem.image
                      }
                      alt={newsItem.title}
                    />
                  </Box>
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{newsItem.title}</Text>
                </Group>
                <Text style={{ textAlign: "justify" }} size="sm" color="dimmed">
                  {newsItem.description}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Tabs.Panel>
        <Tabs.Panel value="1">Second panel</Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default App;
