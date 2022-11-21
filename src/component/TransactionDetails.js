import React from "react";
import { Table } from "semantic-ui-react";

const TransactionDetails = ({ transactionDetails }) => {
  const {
    from,
    to,
    maxFeePerGas,
    hash,
    maxPriorityFeePerGas,
    value,
    gasLimit,
  } = transactionDetails;

  return (
    <div className="mt-4">
      <Table color="green" unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Transaction Details</Table.HeaderCell>
            <Table.HeaderCell textAlign="left"></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Transaction Hash:</Table.Cell>
            <Table.Cell textAlign="left">{hash}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Value:</Table.Cell>
            <Table.Cell textAlign="left">{value} Ether</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>From:</Table.Cell>
            <Table.Cell textAlign="left">{from}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>To:</Table.Cell>
            <Table.Cell textAlign="left">{to}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Gas Usage by Txn:</Table.Cell>
            <Table.Cell textAlign="left">{gasLimit}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Gas Fees:</Table.Cell>
            <Table.Cell textAlign="left">
              Max: {maxFeePerGas} Gwei | Max Priority: {maxPriorityFeePerGas}{" "}
              Gwei
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default TransactionDetails;
