import { Box, NotificationList, NotificationProps, NotificationStore } from "@neuralbertatech/react";
import { useEffect, useState } from "react";

import Head from "next/head";
import { LoremIpsum } from "lorem-ipsum";
import type { NextPage } from "next";

const lorem = new LoremIpsum();
const text = lorem.generateParagraphs(1);
const ns: NotificationProps[] = [
  {
    title: "Default",
    description: text
  },
  {
    title: "Success",
    description: text,
    type: "success"
  },
  {
    title: "Info",
    description: text,
    type: "info"
  },
  {
    title: "Warning",
    description: text,
    type: "warning"
  },
  {
    title: "Error",
    description: text,
    type: "error"
  }
];

ns.forEach((notification, i) => {
  notification.onDismiss = () => {
    NotificationStore.removeNotification(i);
  };
  NotificationStore.addNotification(notification);
});

const Home: NextPage = () => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);
  useEffect(() => {
    setNotifications(NotificationStore.getNotifications());
  }, []);

  return (
    <div>
      <Head>
        <title>Notifications</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        width: "100vw",
        height: "100vh"
      }} onClick={() => setNotifications(NotificationStore.getNotifications())}>
        <Box glass style={{ width: "50%" }}>Box 1</Box>
        <Box glass style={{ width: "50%" }}>Box 2</Box>
        <Box glass style={{ width: "50%" }}>Box 3</Box>
        <NotificationList
          style={{
            position: "absolute",
            bottom: "1.5rem",
            right: "1.5rem",
            width: "96rem"
          }}
          notifications={notifications}
          maxNotifications={3}
        />
      </main>
    </div>
  );
};

export default Home;
