import React, { useState } from "react";
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
  tabLabel: {},
}));

function App() {
  const [leagueIn, setLeagueIn] = useState(0);
  const league_in_titles = ["In the News", "Press"];

  const { classes } = useStyles();

  const newsItems = [
    {
      image: "startupinfo.png",
      title:
        "Enterprise League, Building the Fastest Growing Business Platform for Companies",
      description:
        "That’s why it is important to optimize the way we gather and analyze user feedback. When creating our feedback forms, we focus on addressing",
    },
    {
      image: "business-insider-logo.png",
      title: "Best online business communities",
      description:
        "Enterprise League is a platform that connects SMEs, enabling them to find business partnerships and collaborations. The Al-powered online platform allows",
    },
    {
      image: "classicinformatics.png",
      title: "Best Business Apps",
      description:
        "Irina Georgieva, Co-Founder & CEO of Enterprise League tells that ‘Enterprise League’ is the fastest growing business platform for startups and SMEs",
    },
    {
      image: "startup.png",
      title: "Top 101 small and medium businesses and startups",
      description:
        "At Enterprise League, we are passionate about helping people improve the way they do business. We are on a mission to help millions of entrepreneurs expand",
    },
    {
      image: "uknews.png",
      title:
        "Business platform Enterprise League sees unprecedented user growth",
      description:
        "Enterprise League is extremely proud to share such results particularly since it is facilitating the way companies collaborate during these difficult times",
    },
    {
      image: "umi.png",
      title: "Startup Stories: Enterprise League",
      description:
        "Enterprise League (EL) is a B2B platform for SMEs. Through EL’s platform, small businesses can advertise what their value offerings are for free and search for",
    },
    {
      image: "upgrade.png",
      title: "5 Cost effective ways to scale up your business",
      description:
        "Many entrepreneurs around the world are under constant pressure to scale up their businesses. They repeatedly receive different bits of advice from both",
    },
    {
      image: "upjourney.png",
      title: "How to Stop Feeling Overwhelmed at Work (121 Powerful Tips)",
      description:
        "At some point, you must realize that you need to change something if you want to keep your health and sanity, and still succeed with your business. ",
    },
    {
      image: "prmoment.png",
      title: "Reasons to be Cheerful about Brexit",
      description:
        "We are expecting to fare even better as there will be an increasing need to connect EU and UK SMEs to work together. As we are breaking walls",
    },
  ];

  return (
    <div className="App">
      <div className="page-header">
        <span className="gray-text">Enterprise League </span>
        <span className="blue-text">{league_in_titles[leagueIn]}</span>
      </div>
      <Tabs
        mt={30}
        unstyled={true}
        value={leagueIn}
        onTabChange={setLeagueIn}
        classNames={{ tab: classes.tab, tabLabel: classes.tabLabel }}
      >
        <Tabs.List position="center">
          <Tabs.Tab value="0">{league_in_titles[0]}</Tabs.Tab>
          <Tabs.Tab value="1">{league_in_titles[1]}</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="0">
          <SimpleGrid
            cols={4}
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: "md" },
              { maxWidth: 755, cols: 2, spacing: "sm" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            {newsItems.map((newsItem, index) => (
              <Card key={index} shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                  <Box m={12} p={21}>
                    <Image
                      src={require("./assets/news/" + newsItem.image)}
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
