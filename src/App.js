import React, { useState } from "react";
import "./App.css";
import { Header, Card, Message } from "semantic-ui-react";
import EtherWallet from "./component/EtherWallet";
import WalletOverview from "./component/WalletOverview";
import SendEtherForm from "./component/SendEtherForm";
import TransactionDetails from "./component/TransactionDetails";

function App() {
  const [etherBalance, setEtherBalance] = useState(0);
  const [shouldDisplayOverview, setShouldDisplayOverview] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState();

  const sendEther = async (response) => {
    setTransactionDetails(response);
  };

  const updateEtherBalanceCallback = (data) => {
    setEtherBalance(data);
    setShouldDisplayOverview(true);
    setTransactionDetails('');
  };

  return (
    <div className="App">
      <Header className="font-white font-bold my-4" as="h1">
        Welcome to Etherspot!
      </Header>
      <div>
        <p>0xaf22beC164393a1338516606eB6d73b4C8706Ea4</p>
      </div>
      <div className="my-4">
        <div>
          <EtherWallet
            updateEtherBalanceCallback={updateEtherBalanceCallback}
          />
        </div>
      </div>

      {shouldDisplayOverview && (
        <div className="mt-8">
          <Card className="w-full" style={{ width: "100%" }}>
            <Card.Content>
              <WalletOverview balance={etherBalance} />
            </Card.Content>
            <Card.Content extra>
              <SendEtherForm sendEtherCallback={sendEther} />
            </Card.Content>
          </Card>
          {transactionDetails?.hash ? (
            <TransactionDetails transactionDetails={transactionDetails} />
          ) : (
            transactionDetails?.error && (
              <Message negative content={transactionDetails?.error.message} />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default App;
