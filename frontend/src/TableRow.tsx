import React from "react";
import Badge from "./Badge";

const TableRow: React.FC<any> = ({ policy }) => (
  <tr className="border-b">
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{policy.id}</td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {policy.customer.firstName} {policy.customer.lastName}
    </td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {policy.provider}
    </td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
      Insurance Type
    </td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <Badge status={policy.status} />
    </td>
  </tr>
);

export default React.memo(TableRow);