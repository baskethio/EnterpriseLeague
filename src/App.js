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
import logo from "./assets/logo-header.svg";

import newsItems from "./data/news";

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

  useEffect(() => {
    const header = document.getElementById("header");
    window.onscroll = () => {
      var sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
  }, []);

  return (
    <div className="App">
      <div className="heading" id="header">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="content">
        <div className="page-title">
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
                  <Text
                    style={{ textAlign: "justify" }}
                    size="sm"
                    color="dimmed"
                  >
                    {newsItem.description}
                  </Text>
                </Card>
              ))}
            </SimpleGrid>
          </Tabs.Panel>
          <Tabs.Panel value="1">Second panel</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
