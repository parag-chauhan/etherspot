import React, { useState } from "react";
import { sendTransaction, isValidAddress } from "../ether";
import { Button, Input, Card } from "semantic-ui-react";

const SendEtherForm = ({ sendEtherCallback }) => {
  const [sendEtherUnit, setSendEtherUnit] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [receiverAddress, setReceiverAddress] = useState();

  const resetForm = () => {
    setSendEtherUnit('');
    setReceiverAddress('');
    setIsLoading(false)
  }

  const sendEther = async () => {
    setIsLoading(true)
    const response = await sendTransaction(sendEtherUnit, receiverAddress);
    console.log('response', response);
    resetForm();
    sendEtherCallback(response);
  };

  return (
    <Card.Content extra>
      <Input
        className="mr-4"
        value={receiverAddress}
        placeholder="0xab12..."
        size="large"
        onChange={(event) => {
          setReceiverAddress(event.target.value);
        }}
        style={{'width': '500px'}}
      />
      <Input
        type="number"
        className="w-96 mr-4"
        value={sendEtherUnit}
        placeholder="0.00000..."
        size="large"
        onChange={(event) => {
          setSendEtherUnit(event.target.value);
        }}
      />
      <Button
        disabled={
          !isValidAddress(receiverAddress) ||
          isNaN(sendEtherUnit) ||
          !(sendEtherUnit > 0)
        }
        className="my-4"
        onClick={sendEther}
        positive
        loading={isLoading}
      >
        Send
      </Button>
    </Card.Content>
  );
};

export default SendEtherForm;
