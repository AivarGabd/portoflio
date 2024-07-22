import { Avatar, Chip } from "@nextui-org/react";

const DBBagesBlock = () => {
  return (
    <>
      <Chip
        variant="flat"
        size="sm"
        avatar={<Avatar name="firebase" src="/home-page/firebase.png" />}
      >
        firebase
      </Chip>
      <Chip
        variant="flat"
        size="sm"
        avatar={<Avatar name="mongodb" src="/home-page/mongodb.png" />}
      >
        mongodb
      </Chip>
      <Chip
        variant="flat"
        size="sm"
        avatar={<Avatar name="azure" src="/home-page/azure.png" />}
      >
        azure comsos db
      </Chip>
      <Chip
        variant="flat"
        size="sm"
        avatar={<Avatar name="Yandex-Cloud" src="/home-page/YACloud.png" />}
      >
        yandex cloud
      </Chip>
    </>
  );
};

export default DBBagesBlock;
