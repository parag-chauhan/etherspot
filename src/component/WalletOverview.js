import React from "react";
import { Card, Label, Divider } from "semantic-ui-react";

const WalletOverview = ({ balance }) => {
  return (
    <>
      <Card.Header>Overview</Card.Header>
      <Divider className="my-2" />
      <Card.Description className="flex justify-between">
        <span className="date text-small">Balance:</span>
        <Label as="a">{balance} Ether</Label>
      </Card.Description>
    </>
  );
};

export default WalletOverview;
