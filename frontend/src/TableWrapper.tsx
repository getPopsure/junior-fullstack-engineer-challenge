import React from 'react';
import Navbar from "./Navbar";
import Header from "./Header";
import { Table } from "./Table";

const TableWrapper = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full p-8">
        <Header />
        <Table />
      </div>
    </div>
  );
};

export default TableWrapper;