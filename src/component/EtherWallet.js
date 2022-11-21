import React, { useState } from "react";
import {
  Icon,
  Form,
} from "semantic-ui-react";
import { getBalance, isValidAddress } from "../ether";

const EtherWallet = ({ updateEtherBalanceCallback }) => {
  const [senderAddress, setSenderAddress] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const getAmount = async () => {
    if (!isValidAddress(senderAddress)) {
      setErrorMessage("Please enter valid ether address");
      return;
    }
    const response = await getBalance(senderAddress);
    setErrorMessage("");
    updateEtherBalanceCallback(response);
  };

  return (
    <Form error>
      <Form.Group widths="equal" style={{'width': '500px'}}>
        <Form.Input
          fluid
          value={senderAddress}
          placeholder="Ether Address (e.g: 0xab12...)"
          size="large"
          error={errorMessage || null}
          onChange={(event) => setSenderAddress(event.target.value)}
          icon={
            <Icon name="search" onClick={getAmount} inverted circular link />
          }
        />
      </Form.Group>
    </Form>
  );
};

export default EtherWallet;
