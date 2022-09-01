import React, { useState } from "react";
import "./App.css";
import { Tabs } from "@mantine/core";

function App() {
  const [leagueIn, setLeagueIn] = useState(0);
  const league_in_titles = ["In the News", "Press"];
  return (
    <div className="App">
      <div className="page-header">
        <span className="gray-text">Enterprise League </span>
        <span className="blue-text">{league_in_titles[leagueIn]}</span>
      </div>
      <Tabs color="#228cd5" value={leagueIn} onTabChange={setLeagueIn}>
        <Tabs.List>
          <Tabs.Tab value="0">{league_in_titles[0]}</Tabs.Tab>
          <Tabs.Tab value="1">{league_in_titles[1]}</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="0">First panel</Tabs.Panel>
        <Tabs.Panel value="1">Second panel</Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default App;
