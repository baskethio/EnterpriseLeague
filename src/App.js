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
  Spoiler,
  Modal,
  Button,
} from "@mantine/core";
import logo from "./assets/logo-header.svg";
import not from "./assets/images/not.png";
import yes from "./assets/images/yes.png";

import newsItems from "./data/news";
import pressItems from "./data/press";

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
  control: {
    float: "right",
    bottom: "5px",
  },
}));

function App() {
  const [leagueIn, setLeagueIn] = useState(1);
  const [opened, setOpened] = useState(false);
  const league_in_titles = ["In the News", "Press"];

  const { classes } = useStyles();

  const choiceMade = () => {
    localStorage.setItem("choice", "made");
    setOpened(false);
  };

  const popup = (
    <Modal
      opened={opened}
      withCloseButton={false}
      size="70%"
      onClose={() => setOpened(false)}
    >
      <Text align="center" weight={500}>
        Do you need micro business loans?
      </Text>
      <Text align="center">
        Quick loans for business, invoice financing and flexible loans
      </Text>
      <div className="choices">
        <div className="choice">
          <div>
            <img src={not} alt="NOT REALLY" />
          </div>
          <Button style={{ backgroundColor: "#85589F" }} onClick={choiceMade}>
            NOT REALLY
          </Button>
        </div>
        <div className="choice">
          <div>
            <img src={yes} alt="YES! EXTRA MONEY" />
          </div>
          <Button style={{ backgroundColor: "#41A7A3" }} onClick={choiceMade}>
            YES! EXTRA MONEY
          </Button>
        </div>
      </div>
    </Modal>
  );

  const showPopup = () => {
    if (!localStorage.getItem("choice")) {
      setOpened(true);
    }
  };

  useEffect(() => {
    setLeagueIn(0);
    setTimeout(showPopup, 10000);
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
      {popup}
      <div className="heading" id="header">
        <img className="logo" src={logo} alt="Logo" />
        <div className="nav">
          <div className="nav-item">Product</div>
          <div className="nav-item">Company</div>
          <div className="nav-item">Resources</div>
        </div>
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

          <Tabs.Panel value="1">
            <div className="content">
              {pressItems.map((press, index) => (
                <Spoiler
                  classNames={{
                    control: classes.control,
                  }}
                  key={index}
                  maxHeight={180}
                  showLabel="Read More"
                  hideLabel="Read Less"
                  style={{
                    backgroundColor: "#fff",
                    margin: "15px 10%",
                    padding: "21px",
                    paddingBottom: "30px",
                    textAlign: "justify",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    boxShadow: "0px 3px 6px #00000029",
                  }}
                >
                  <img
                    className="press-image"
                    width={150}
                    src={
                      "https://enterpriseleague.com/public/img/press/" +
                      press.image
                    }
                    alt={press.title}
                  />
                  <Text align="center" weight={500}>
                    {press.title}
                  </Text>
                  <Text size="md" className="light-gray">
                    {press.location + ", " + press.time}
                  </Text>
                  <br />
                  <Text mt={12} className="light-gray">
                    {press.content}
                  </Text>
                  <Text>{press.author}</Text>
                  <Text>{press.autorPosition}</Text>
                </Spoiler>
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
